import React, { useState } from 'react';
import styled from 'styled-components';
import WeekTitle from './WeekTitle';
import Month from './Month';
import CalendarHeader from './Header';

const Box = styled.div`
  padding: 0 20px;
`;

const Calendar = (props) => {

  const today = new Date();
  const initYear = today.getFullYear();
  const initMonth = today.getMonth();
  const [year, setYear] = useState(initYear);
  const [month, setMonth] = useState(initMonth);
  const [selectedDate, setSelectedDate] = useState(today);

  function gotoNextMonth() {
    const date = new Date(year, month + 1);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  }

  function gotoPrevMonth() {
    const date = new Date(year, month - 1);
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  }

  function selectADay(date) {
    setSelectedDate(date);
  }

  return <Box>
    <CalendarHeader 
      year={year}
      month={month}
      gotoNextMonth={gotoNextMonth}
      gotoPrevMonth={gotoPrevMonth}
    />
    <WeekTitle  />  
    <Month
      year={year}
      month={month}
      selectedDate={selectedDate} 
      selectADay={selectADay}
    />
  </Box>
}


export default Calendar;



export function isSameDay(d1, d2) {
  if (!d1 || !d2) return;

  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

