/* eslint-disable react/prop-types */

function TimerCounter(props) {
  const { timer } = props;

  return (
    <div className="flex justify-evenly items-center">
      <div className="flex justify-center text-2xl text-black">
        <div>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes} </div>
        <div> {" : "} </div>
        <div> {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</div>
      </div>
    </div>
  );
}

export default TimerCounter;
