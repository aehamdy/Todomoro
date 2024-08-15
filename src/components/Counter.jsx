import { useEffect, useRef, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const timerInterval = useRef(null);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onStartTimer = () => {
    setTimer({ minutes: value - 1, seconds: 59 });
    setIsTimerFinished(false);

    timerInterval.current = setInterval(() => {
      setTimer((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval.current);
          setIsTimerFinished(true);
          return { minutes: 0, seconds: 0 };
        } else if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          return { minutes: minutes, seconds: seconds - 1 };
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerInterval.current);
  }, []);

  return (
    <section className="w-1/2 mx-auto">
      <div className="flex justify-evenly">
        <input
          type="number"
          value={value}
          onChange={onInputChange}
          className="w-16 p-1 rounded-md bg-slate-300 hover:shadow-lg"
        />
        <button
          type="button"
          onClick={onStartTimer}
          className="p-1 rounded-md text-white bg-black hover:shadow-lg"
        >
          Start
        </button>
      </div>
      {isTimerFinished ? (
        <div>TIME'S UP!</div>
      ) : (
        <div className="flex justify-center text-2xl text-black">
          <div>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes} </div>
          <div> {" : "} </div>
          <div> {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</div>
        </div>
      )}
    </section>
  );
}

export default Counter;
