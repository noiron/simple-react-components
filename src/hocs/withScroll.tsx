import React from 'react';
import { throttle } from '../utils';

interface IWithScroll {
  scrollY: number;
}

export default function withScroll(Comp: any) {
  return class ComponentWithScroll extends React.Component<any, IWithScroll> {
    constructor(props: any) {
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
      window.removeEventListener('scroll', this._scrollHandler);
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