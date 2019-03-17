import * as React from 'react';
import styled from 'styled-components';
import ScrollTop from '../components/scrollTop';
import logo from './logo.svg';

const DemoBox = styled.div`
  height: 4000px;
  font-size: 22px;
`;

class DemoScrollTop extends React.Component {
  public render() {
    return (
      <DemoBox>
        <div>回到顶部按钮的展示页，请向下翻动页面至第二页</div>
        <ScrollTop />
      </DemoBox>
    );
  }
}

export default DemoScrollTop;
