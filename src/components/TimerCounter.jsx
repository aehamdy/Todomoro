/* eslint-disable react/prop-types */

function TimerCounter(props) {
  const { timer } = props;

  const textColor = "#739ab9";

  return (
    <div className="flex md:flex-col items-center gap-1 text-6xl md:text-8xl select-none">
      <div className="font-semibold" style={{ color: textColor }}>
        {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}{" "}
      </div>
      <div className="md:hidden font-thin" style={{ color: textColor }}>
        {" "}
        {" : "}{" "}
      </div>
      <div className="font-thin" style={{ color: textColor }}>
        {" "}
        {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
      </div>
    </div>
  );
}

export default TimerCounter;
