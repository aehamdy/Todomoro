import { useEffect, useRef, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const timerInterval = useRef(null);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onStartTimer = () => {
    setTimer({ minutes: value - 1, seconds: 5 });

    timerInterval.current = setInterval(() => {
      setTimer((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval.current);
          return { minutes: 0, seconds: 0 };
        } else if (seconds === 0) {
          return { minutes: timer - 1, seconds: 59 };
        } else {
          return { minutes: minutes, seconds: seconds - 1 };
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerInterval.current);
  });

  return (
    <section>
      <input
        type="number"
        value={value}
        onChange={onInputChange}
        className="bg-slate-300"
      />
      <button type="button" onClick={onStartTimer} className="text-black">
        Start
      </button>
      <div className="text-black">
        <div>00</div>
        <div>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</div>
        <div>{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</div>
      </div>
    </section>
  );
}

export default Counter;
