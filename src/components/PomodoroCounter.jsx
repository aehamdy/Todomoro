/* eslint-disable react/prop-types */

function PomodoroCounter(props) {
  const { inputValue } = props;

  return (
    <div className="flex gap-1">
      <span>
        {inputValue.minutes < 10
          ? `0${inputValue.minutes}`
          : inputValue.minutes}
      </span>
      <span>:</span>
      <span>
        {inputValue.seconds < 10
          ? `0${inputValue.seconds}`
          : inputValue.seconds}
      </span>
    </div>
  );
}

export default PomodoroCounter;
