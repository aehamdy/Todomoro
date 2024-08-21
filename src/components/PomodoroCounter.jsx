/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

function PomodoroCounter(props) {
  const { cycles, onStartSessionRef } = props;

  const [inputValue, setInputValue] = useState({
    minutes: 0,
    seconds: 0,
  });

  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    onStartSessionRef.current = onStartSession;
  }, [cycles]);

  const onStartSession = () => {
    const sessionDuration = 25; // 25 minutes session

    setInputValue((prevValue) => ({
      ...prevValue,
      minutes: cycles * sessionDuration,
      seconds: 0,
    }));

    setIsSessionFinished(false);

    timerRef.current = setInterval(() => {
      setInputValue((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsSessionFinished(true);
          return { minutes: 0, seconds: 0 };
        } else if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          return { minutes: minutes, seconds: seconds - 1 };
        }
      });
    }, 1000);
  };

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
