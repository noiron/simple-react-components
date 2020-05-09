import * as React from 'react';
import styled from 'styled-components';
import AwesomeComponent from '../../components/awesome-component';
  
const DemoBox = styled.div``;
  
class DemoAwesomeComponent extends React.Component {
  componentDidMount() {
    document.title = 'AwesomeComponent组件';
  }
  
  render() {
    return (
      <DemoBox>
        <AwesomeComponent />
      </DemoBox>
    );
  }
}

export default DemoAwesomeComponent;