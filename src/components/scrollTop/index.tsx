/**
 * 点击回到页面顶部的按钮，在第一屏时隐藏该按钮
 */
import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import withScroll, { IWithScroll } from 'src/hocs/withScroll';

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

interface IScrollTop extends IWithScroll {}

class ScrollTop extends React.Component<IScrollTop> {
  intervalId: number;

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.intervalId);
    }
    window.scroll(0, window.pageYOffset - 100);
  }

  scrollToTop = () => {
    this.intervalId = window.setInterval(this.scrollStep, 20);
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
