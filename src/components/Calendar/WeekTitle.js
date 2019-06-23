import React from 'react';
import styled from 'styled-components';

const WeekTitleBox = styled.div`
  background: #fff4f2;
  height: 30px;
  border-radius: 15px;
  color: #f86442;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`;

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

const WeekTitle = () => {
  return (
    <WeekTitleBox>
      {
        weekDays.map((item, index) => (
          <div key={index}>{item}</div>
        ))
      }
    </WeekTitleBox>
  )
}

export default WeekTitle;
