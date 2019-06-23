import React, { useState } from 'react';
import WeekTitle from './WeekTitle';
import Month from './Month';
import CalendarHeader from './Header';


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

  return <div>
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
  </div>
}


export default Calendar;



export function isSameDay(d1, d2) {
  if (!d1 || !d2) return;

  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

