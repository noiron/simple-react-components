import * as React from 'react';
import styled from 'styled-components';
import Toast from '../../components/toast';

const DemoBox = styled.div``;

class DemoToast extends React.Component {
  componentDidMount() {
    document.title = 'Toast组件';
  }

  render() {
    return (
      <DemoBox>
        <div onClick={() => Toast.success('成功啦', 3000, null, true)}>
          测试成功函数
        </div>
        <div onClick={() => Toast.show('测试SHOW', 30000, null, true)}>
          测试SHOW
        </div>
        <div onClick={() => Toast.hide()}>隐藏Toast</div>
      </DemoBox>
    );
  }
}

export default DemoToast;
