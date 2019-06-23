import * as React from 'react';
import styled from 'styled-components';
import Calendar from '../components/Calendar';

const DemoBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Caption = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
`;


class DemoCalendar extends React.Component {

  componentDidMount() {
    document.title = '日历组件';
  }

  render() {
    return (
      <DemoBox>
        <Caption>日历组件的展示</Caption>
        <Calendar />
      </DemoBox>
    );
  }
}

export default DemoCalendar;
