/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

function PomodoroRestCounter(props) {
  const { cycles, isSessionFinished, setIsSessionFinished } = props;
  const [rest, setRest] = useState({
    minutes: 0,
    seconds: 0,
  });
  const timerRef = useRef(null);

  const onStartRest = () => {
    const restTime = 5; // 5 minutes rest session

    setRest((prevValue) => ({
      ...prevValue,
      // minutes: cycles * restTime,
      // seconds: 0,
      minutes: 0,
      seconds: 20,
    }));

    timerRef.current = setInterval(() => {
      setRest((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsSessionFinished(false);
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
    if (isSessionFinished) {
      onStartRest();
    }

    return () => clearInterval(timerRef.current);
  }, [isSessionFinished]);

  useEffect(() => {
    const restTime = 5;
    setRest((prevValue) => ({
      ...prevValue,
      // minutes: cycles * restTime,
      minutes: 1,
      seconds: 5,
    }));
  }, [cycles]);

  return (
    cycles > 0 && (
      <div className="flex flex-col">
        <span className="text-8xl font-semibold text-[#14401d]">
          {rest.minutes < 10 ? `0${rest.minutes}` : rest.minutes}
        </span>
        {/* <span>:</span> */}
        <span className="text-8xl font-normal text-[#14401d]">
          {rest.seconds < 10 ? `0${rest.seconds}` : rest.seconds}
        </span>
      </div>
    )
  );
}

export default PomodoroRestCounter;
