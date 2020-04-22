import * as React from 'react';
import styled from 'styled-components';
import Toast from '../../components/toast';

const DemoBox = styled.div`
  text-align: center;

  .button {
    border: 1px solid #ccc;
    padding: 10px;
    width: 100px;
    margin: 10px auto;
    border-radius: 4px;
  }
`;

class DemoToast extends React.Component {
  componentDidMount() {
    document.title = 'Toast组件';
  }

  render() {
    return (
      <DemoBox>
        <div
          className="button"
          onClick={() => Toast.success('Success', 3000, null, true)}
        >
          成功，有遮罩
        </div>
        <div
          className="button"
          onClick={() => Toast.success('Success', 3000, null, false)}
        >
          成功，无遮罩
        </div>
        <div
          className="button"
          onClick={() => Toast.show('Show', 3000, null, true)}
        >
          无动画，有遮罩
        </div>
        <div
          className="button"
          onClick={() => Toast.show('Show', 3000, null, false)}
        >
          无动画，无遮罩
        </div>
        <div className="button" onClick={() => Toast.hide()}>
          隐藏
        </div>
      </DemoBox>
    );
  }
}

export default DemoToast;
