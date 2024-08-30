/* eslint-disable react/prop-types */

function TimerCounter(props) {
  const { timer } = props;

  // const textColor = "#F98315";
  // const textColor = "#F27108";
  // const textColor = "#F1BD78";
  // const textColor = "#C8C0F0";
  const textColor = "#FFC0A5";

  return (
    <div className="flex justify-evenly items-center">
      <div className="flex md:flex-col items-center gap-1 text-8xl select-none">
        <div className="font-semibold" style={{ color: textColor }}>
          {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}{" "}
        </div>
        <div className="md:hidden font-thin" style={{ color: textColor }}>
          {" "}
          {" : "}{" "}
        </div>
        <div className="font-normal" style={{ color: textColor }}>
          {" "}
          {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
        </div>
      </div>
    </div>
  );
}

export default TimerCounter;
