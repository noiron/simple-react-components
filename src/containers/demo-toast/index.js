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
        <Toast />
      </DemoBox>
    );
  }
}

export default DemoToast;
