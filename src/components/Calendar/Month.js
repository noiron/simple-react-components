import React from 'react';
import Week from './Week';
import PropTypes from 'prop-types';


/**
 * 
 * @param {number} year 
 * @param {number} month 
 */
const getWeekDays = (year, month) => {

  const weeks = [];
  const lastDate = new Date(year, month + 1, 0);
  const daysCountInThisMonth = lastDate.getDate() - 1;

  let i = 0;
  let d = new Date(year, month, 1);
  let week = [];
  while (i <= daysCountInThisMonth) {
    week.push(new Date(d));
    if (d.getDay() === 6) {
      weeks.push([...week.splice(0)]);
    }
    d.setDate(d.getDate() + 1);
    i++;

    // 填补最后一周的空白日期
    if (i > daysCountInThisMonth && week.length < 7 && week.length > 0) {
      const blankNum = 7 - week.length;
      for (let j = 0; j < blankNum; j++) {
        week.push(null);
      }
      weeks.push(week);
    }
  }

  if (weeks.length > 0 && weeks[0].length < 7) {
    const blankNum = 7 - weeks[0].length;
    weeks[0].splice(0, 0, ...new Array(blankNum).fill(null));
  }

  return weeks;
}


const Month = props => {

  const { year, month, ...rest } = props;
  const weeks = getWeekDays(year, month);

  return (
    <div>
      {
        weeks.map((week, index) => {
          return <Week days={week} {...rest} key={index} />
        })
      }
    </div>
  )
}


Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
}

export default Month;
