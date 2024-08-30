/* eslint-disable react/prop-types */

import tickSound from "../sounds/pomodoro-tick-sound.mp3";

import { useEffect, useRef, useState } from "react";
import Speaker from "./Speaker";

const sessionDuration = 25; // 25 minutes per session

function PomodoroCounter(props) {
  const { cycles, setIsSessionFinished, onStartSessionRef } = props;

  const [inputValue, setInputValue] = useState({
    minutes: 0,
    seconds: 0,
  });
  const timerRef = useRef(null);
  const tickSoundRef = useRef(new Audio(tickSound));

  const playSound = () => {
    tickSoundRef.current.play();
  };

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
          playSound();
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          playSound();
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

  const toggleSound = () => {
    if (tickSoundRef.current.muted) {
      tickSoundRef.current.muted = false;
    } else {
      tickSoundRef.current.muted = true;
    }
  };

  // const textColor = "#395181";
  // const textColor = "#304261";
  // const textColor = "#95B3D7";
  // const textColor = "#333551";
  // const textColor = "#7Fa3D1";
  // const textColor = "#471515";

  return (
    <div className="flex md:gap-2 items-center">
      <div className="flex md:flex-col items-center gap-1 text-8xl select-none">
        {/* <span className={`font-semibold text-[${textColor}]`}> */}
        <span className={`font-semibold text-counter-text`}>
          {inputValue.minutes < 10
            ? `0${inputValue.minutes}`
            : inputValue.minutes}
        </span>
        {/* <span className={`md:hidden font-thin text-[${textColor}]`}>:</span> */}
        <span className={`md:hidden font-thin text-counter-text`}>:</span>
        {/* <span className={`font-normal text-[${textColor}]`}> */}
        <span className={`font-normal text-counter-text`}>
          {inputValue.seconds < 10
            ? `0${inputValue.seconds}`
            : inputValue.seconds}
        </span>
      </div>
      <Speaker toggleSound={toggleSound} />
    </div>
  );
}

export default PomodoroCounter;
