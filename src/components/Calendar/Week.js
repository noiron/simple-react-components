import React from 'react';
import PropTypes from 'prop-types';
import Day from "./Day";
import styled from 'styled-components';
import { isSameDay } from '.';

const WeekBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;


const Week = (props) => {

  const { days, selectADay, selectedDate } = props;

  return (
    <WeekBox>
      {
        days.map((item, index) => {
          return (
            <Day 
              date={item}
              focus={!!(item && isSameDay(item, selectedDate))}
              selectADay={selectADay}  
              key={index}
            />
          )
        })
      }
    </WeekBox>
  )
}


Week.propTypes = {
  days: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  selectedDate: PropTypes.instanceOf(Date),
  selectADay: PropTypes.func.isRequired,
}

export default Week;
