import React from 'react';
import Day from "./Day";
import styled from 'styled-components';

const WeekBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;


const Week = (props) => {

    const { days } = props;

    return (
      <WeekBox>
        {
          days.map((item, index) => {
            console.log(item);
            return <Day date={item} />
          })
        }
      </WeekBox>
    )
  }

export default Week;
