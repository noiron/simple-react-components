import * as React from 'react';
import styled from 'styled-components';
import Calendar from '../components/Calendar';

const DemoBox = styled.div`

`;

class DemoCalendar extends React.Component {
  render() {
    return (
      <DemoBox>
        <div>日历组件的展示</div>
        <Calendar />
      </DemoBox>
    );
  }
}

export default DemoCalendar;
