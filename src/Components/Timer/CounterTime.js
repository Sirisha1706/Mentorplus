import React from 'react';
import CountdownTimer from './CountdownTimer';
import './CounterTime.css';

const CounterTime= props => {
  const THREE_DAYS_IN_MS = (props.timer)* 30 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
  );
}
export default CounterTime;