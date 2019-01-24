/**
 * 点击回到页面顶部的按钮，在第一屏时隐藏该按钮
 */
import React from 'react';
import classnames from 'classnames';
import './index.css';
// import { throttle } from '../../util';


export function throttle(fn, delay, atleast) {
  var timer = null;
  var previous = null;

  return function() {
      var now = +new Date();

      if (!previous) previous = now;

      if (now - previous > atleast) {
          fn();
          previous = now;
      } else {
          clearTimeout(timer);
          timer = setTimeout(function() {
              fn();
          }, delay);
      }
  };
};
// const ic_scroll_top = require('../../image/scrollTop.png');


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
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToTop = () => {
    this.intervalId = setInterval(this.scrollStep, 20);
  }


  render() {
    const { scrollY } = this.props;
    const shouldHide = scrollY < window.screen.height;
    const classes = classnames('scroll-top-button', { 'hide': shouldHide });

    return (
      <div className={classes} onClick={this.scrollToTop}>
        {/* <img src={ic_scroll_top} alt="返回顶部" /> */}
      </div>
    )
  }
}

export default withScroll(ScrollTop);
