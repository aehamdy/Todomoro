/* eslint-disable react/no-unescaped-entities */
import tickSound from "../sounds/timer-tick-sound.mp3";
import finishSound from "../sounds/finish-sound.mp3";
import { useEffect, useRef, useState } from "react";
import TimerInput from "./TimerInput";
import TimerButton from "./TimerButton";
import TimerError from "./TimerError";
import OtherButtons from "./OtherButtons";
import TimerCounter from "./TimerCounter";
import Speaker from "./Speaker";

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

  const toggleSound = () => {
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
          <div className="flex justify-between gap-4">
            <TimerInput setError={setError} onValueChange={onValueChange} />
            <TimerButton onStartTimer={onStartTimer} />
          </div>
          <div className="text-red-500">
            <TimerError error={error} />
          </div>
        </div>
      )}

      {isTimerFinished && (
        <div className="p-1 font-semibold text-xl text-red-500 animate-bounce">
          TIME'S UP!
        </div>
      )}
      {isTimerRunning && (
        <div className="flex justify-evenly items-center">
          <TimerCounter timer={timer} />
          <Speaker toggleSound={toggleSound} />
        </div>
      )}
    </section>
  );
}

export default Timer;
