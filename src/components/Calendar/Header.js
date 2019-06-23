import React from 'react';
import styled from 'styled-components';

const prev_icon = require('./images/prev.png');
// const prev_disable_icon = require('./images/prev-disable.png');
const next_icon = require('./images/next.png');
// const next_disable_icon = require('./images/next-disable.png');



const HeaderBox = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  img {
    width: 23px;
  }
  button {
    border: none;
    background: none;
    outline: none;
  }
`;

const CalendarHeader = props => {

  const { year, month } = props;

  return (
    <HeaderBox className="calendar-header">

      <button onClick={props.gotoPrevMonth}>
        <img src={prev_icon} alt="prev" />
      </button>
    
      {`${year}年${month + 1}月`}
    
      <button onClick={props.gotoNextMonth}>
        <img src={next_icon} alt="next" />
      </button>

    </HeaderBox>
  )

}





export default CalendarHeader;