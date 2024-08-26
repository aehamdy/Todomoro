/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

const sessionDuration = 25; // 25 minutes per session

function PomodoroCounter(props) {
  const { cycles, setIsSessionFinished, onStartSessionRef } = props;

  const [inputValue, setInputValue] = useState({
    minutes: 0,
    seconds: 0,
  });

  const timerRef = useRef(null);

  useEffect(() => {
    // Avoid setting the ref during render
    if (onStartSessionRef) {
      onStartSessionRef.current = onStartSession;
    }
  }, [onStartSessionRef]);

  const onStartSession = () => {
    const duration = sessionDuration;

    setIsSessionFinished(false);

    setInputValue({
      // minutes: cycles * duration,
      // seconds: 0,
      minutes: 0,
      seconds: 3,
    });

    // Clear previous interval if any
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setInputValue((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setTimeout(() => {
            setIsSessionFinished(true);
          }, 0);
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
    const duration = sessionDuration;
    setInputValue({
      minutes: cycles * duration,
      seconds: 0,
    });
  }, [cycles]);

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="flex items-center gap-1 select-none">
      <span className="text-8xl font-semibold text-[#471515]">
        {inputValue.minutes < 10
          ? `0${inputValue.minutes}`
          : inputValue.minutes}
      </span>
      <span className="text-8xl font-thin text-[#471515]">:</span>
      <span className="text-8xl font-normal text-[#471515]">
        {inputValue.seconds < 10
          ? `0${inputValue.seconds}`
          : inputValue.seconds}
      </span>
    </div>
  );
}

export default PomodoroCounter;
