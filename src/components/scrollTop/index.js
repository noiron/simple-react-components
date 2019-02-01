/**
 * 点击回到页面顶部的按钮，在第一屏时隐藏该按钮
 */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { throttle } from '../../utils';

const ic_scroll_top = require('../../assets/images/scroll-top.png');

const ScrollTopBox = styled.div`
  width: 75px;
  height: 75px;
  position: fixed;
  right: 20px;
  bottom: 50px;
  background-image: url(${ic_scroll_top});
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;

  &.hide {
    display: none;
  }
`;

function withScroll(Comp) {
  return class ComponentWithScroll extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        scrollY: 0
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', throttle(this._scrollHandler, 100, 500));
    }

    _scrollHandler = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      this.setState({ scrollY });
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
      const { scrollY } = this.state;
      return <Comp
        {...this.props}
        scrollY={scrollY}
      />
    }
  }
}

class ScrollTop extends React.Component {

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.intervalId);
    }
    window.scroll(0, window.pageYOffset - 100);
  }

  scrollToTop = () => {
    this.intervalId = setInterval(this.scrollStep, 20);
  }


  render() {
    const { scrollY } = this.props;
    const shouldHide = scrollY < window.screen.height;
    const classes = classnames({ 'hide': shouldHide });

    return (
      <ScrollTopBox className={classes} onClick={this.scrollToTop} />
    )
  }
}

export default withScroll(ScrollTop);
