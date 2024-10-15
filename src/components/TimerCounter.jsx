/* eslint-disable react/prop-types */

import MinutesCounter from "./MinutesCounter";
import SecondsCounter from "./SecondsCounter";

function TimerCounter(props) {
  const { timer } = props;

  return (
    <div className="flex md:flex-col items-center gap-1 text-6xl md:text-8xl select-none">
      <MinutesCounter minutes={timer.minutes} textColor="timer-text" />
      <div className="md:hidden font-thin text-timer-text"> {" : "} </div>
      <SecondsCounter seconds={timer.seconds} textColor="timer-text" />
    </div>
  );
}

export default TimerCounter;
