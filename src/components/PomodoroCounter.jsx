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
    console.log(tickSoundRef);

    if (tickSoundRef.current.muted) {
      tickSoundRef.current.muted = false;
    } else {
      tickSoundRef.current.muted = true;
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 text-8xl select-none">
        <span className="font-semibold text-[#471515]">
          {inputValue.minutes < 10
            ? `0${inputValue.minutes}`
            : inputValue.minutes}
        </span>
        <span className="font-thin text-[#471515]">:</span>
        <span className="font-normal text-[#471515]">
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
