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


  return <div>
    <CalendarHeader 
      year={year}
      month={month}
      gotoNextMonth={gotoNextMonth}
      gotoPrevMonth={gotoPrevMonth}
    />
    <WeekTitle  />  
    <Month year={year} month={month} />
  </div>
}


export default Calendar;

