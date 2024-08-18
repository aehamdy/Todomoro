import { useEffect, useRef, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerInterval = useRef(null);

  const onInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  const onStartTimer = () => {
    setTimer({ minutes: value - 1, seconds: 5 });
    setIsTimerFinished(false);
    setIsTimerRunning(true);

    timerInterval.current = setInterval(() => {
      setTimer((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval.current);
          setIsTimerFinished(true);
          setIsTimerRunning(false);
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
      {!isTimerRunning && (
        <div className="flex justify-evenly">
          <input
            type="text"
            value={value}
            onChange={onInputChange}
            className="w-16 p-1 rounded-md bg-slate-300 hover:shadow-lg focus:outline-none"
            placeholder="Insert time in minutes"
          />
          <button
            type="button"
            onClick={onStartTimer}
            className="p-1 rounded-md text-white bg-black hover:shadow-lg"
          >
            Start
          </button>
        </div>
      )}

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

/*
 # [ ] show a 'pause' and 'stop" buttons when the timer starts
 # [ ] hide the input and the 'start' button when timer starts
 # [ ] enlarge the minutes and seconds and add proper styling
 # [ ] add a clock sound while timer is counting
 # [ ] add mute button to mute that sound
 */
