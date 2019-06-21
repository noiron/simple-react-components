import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DayBox = styled.div`
  width: 30px;
  height: 30px;

`;

const Day = props => {
  const dateStr = props.date ? props.date.getDate() : '';

  return <DayBox>{dateStr}</DayBox>
}


Day.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Day;
