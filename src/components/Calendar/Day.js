import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DayBox = styled.div`
  width: 30px;
  height: 30px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 100%;
    height: 100%;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
  }

  span.on-focus {
    background-color: #FFF4F2;
  }
`;

const Day = props => {
  const { date } = props;
  const dateStr = date ? date.getDate() : '';
  const [ focus, setFocus ] = useState(false);

  return (
    <DayBox tabIndex="0" 
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <span className={focus ? "on-focus" : ''}>
        {dateStr}
      </span>
    </DayBox>
  )
}


Day.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Day;
