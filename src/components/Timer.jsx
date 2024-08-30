/* eslint-disable react/no-unescaped-entities */
import tickSound from "../sounds/timer-tick-sound.mp3";
import finishSound from "../sounds/finish-sound.mp3";
import { useEffect, useRef, useState } from "react";
import TimerInput from "./TimerInput";
import TimerButton from "./TimerButton";
import TimerError from "./TimerError";
import OtherButtons from "./OtherButtons";
import TimerCounter from "./TimerCounter";

const iconSize = 30;
const iconColor = "#FFC0A5";

const speakerOn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      fill="#212121"
      // fill={iconColor}
      d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.749 2.105.183 2.105-.912V4.814Zm-6.016 4.812L15 5.391v17.216l-4.516-4.231a3.25 3.25 0 0 0-2.222-.879H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.492c0-.966.784-1.75 1.75-1.75h3.011a3.25 3.25 0 0 0 2.223-.879ZM22.702 5.252a.75.75 0 0 0-1.126.99A11.702 11.702 0 0 1 24.5 14c0 2.973-1.103 5.687-2.924 7.757a.75.75 0 1 0 1.126.99A13.202 13.202 0 0 0 26 14c0-3.352-1.245-6.415-3.298-8.748Z"
    />
    <path
      fill="#212121"
      // fill={iconColor}
      d="M20.353 8.303a.75.75 0 1 0-1.2.9A7.961 7.961 0 0 1 20.75 14c0 1.8-.594 3.46-1.597 4.797a.75.75 0 1 0 1.2.9A9.461 9.461 0 0 0 22.25 14c0-2.136-.706-4.11-1.897-5.697Z"
    />
  </svg>
);

const speakerOff = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      fill="#212121"
      // fill={iconColor}
      d="M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.095-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.169 1.197-.473l4.937-4.63ZM15 5.392l-4.516 4.234a3.25 3.25 0 0 1-2.223.88H5.25a1.75 1.75 0 0 0-1.75 1.75v3.491c0 .967.784 1.75 1.75 1.75h3.012c.825 0 1.62.314 2.222.879L15 22.607V5.391ZM19.782 10.722a.75.75 0 0 0-1.064 1.056l2.218 2.235-2.215 2.206a.75.75 0 1 0 1.058 1.062l2.218-2.207 2.225 2.208a.75.75 0 0 0 1.056-1.064l-2.22-2.205 2.224-2.234a.75.75 0 1 0-1.063-1.058l-2.223 2.231-2.214-2.23Z"
    />
  </svg>
);

function Timer() {
  const [inputValue, setInputValue] = useState(0);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio(tickSound));
  const finishRef = useRef(new Audio(finishSound));

  const speaker = isSpeakerOn ? speakerOn : speakerOff;

  const onValueChange = (val) => {
    setInputValue(val);
  };

  function playSound() {
    if (isSpeakerOn) {
      audioRef.current.play();
    }
  }

  function playFinishSound() {
    finishRef.current.play();
  }

  const onStartTimer = () => {
    if (Number.isInteger(inputValue) && inputValue > 0) {
      setTimer({ minutes: inputValue - 1, seconds: 59 });
      setIsTimerFinished(false);
      setIsTimerRunning(true);

      timerRef.current = setInterval(() => {
        setTimer((prevValue) => {
          const { minutes, seconds } = prevValue;

          if (minutes === 0 && seconds === 0) {
            clearInterval(timerRef.current);
            setIsTimerFinished(true);
            setIsTimerRunning(false);
            playFinishSound();
            return { minutes: 0, seconds: 0 };
          } else if (seconds === 0) {
            return { minutes: minutes - 1, seconds: 59 };
          } else {
            return { minutes: minutes, seconds: seconds - 1 };
          }
        });

        playSound();
      }, 1000);
    } else {
      setError(true);
      return;
    }
  };

  const onPauseClick = () => {
    clearInterval(timerRef.current);
    setIsPaused(!isPaused);
    setIsSpeakerOn((prevValue) => prevValue);
  };

  const onPlayClick = () => {
    setTimer({ minutes: timer.minutes, seconds: timer.seconds });

    timerRef.current = setInterval(() => {
      setTimer((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsTimerFinished(true);
          setIsTimerRunning(false);
          return { minutes: 0, seconds: 0 };
        } else if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        } else {
          return { minutes: minutes, seconds: seconds - 1 };
        }
      });

      playSound();
      setIsSpeakerOn((prevValue) => prevValue);
    }, 1000);

    setIsPaused(!isPaused);
  };

  const onStopClick = () => {
    clearInterval(timerRef.current);
    setTimer({ minutes: 0, seconds: 0 });

    setTimeout(() => {
      setIsTimerRunning(false);
    }, 200);
  };

  const onSpeakerClick = () => {
    setIsSpeakerOn((prev) => !prev);
    if (isSpeakerOn) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="w-1/2 mx-auto">
      {isTimerRunning ? (
        <OtherButtons
          onStopClick={onStopClick}
          isPaused={isPaused}
          onPauseClick={onPauseClick}
          onPlayClick={onPlayClick}
        />
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-evenly">
            <TimerInput setError={setError} onValueChange={onValueChange} />
            <TimerButton onStartTimer={onStartTimer} />
          </div>
          <div className="text-red-500">
            <TimerError error={error} />
          </div>
        </div>
      )}

      {isTimerFinished && <div className="p-1 text-red-500">TIME'S UP!</div>}
      {isTimerRunning && (
        <div className="flex justify-evenly items-center">
          <TimerCounter timer={timer} onSpeakerClick={onSpeakerClick} />
          <div onClick={onSpeakerClick} className="speaker-icon cursor-pointer">
            {speaker}
          </div>
        </div>
      )}
    </section>
  );
}

export default Timer;
