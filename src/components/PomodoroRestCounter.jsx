/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import restSound from "../sounds/pomodoro-rest-tick-sound.mp3";
import finishSound from "../sounds/finish-sound.mp3";
import { useEffect, useRef, useState } from "react";
import Speaker from "./Speaker";
import CountersMessage from "./CountersMessage";
import MinutesCounter from "./MinutesCounter";
import SecondsCounter from "./SecondsCounter";

function PomodoroRestCounter(props) {
  const { cycles, isSessionFinished } = props;
  const [rest, setRest] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [isRestFinished, setIsRestFinished] = useState(false);
  const timerRef = useRef(null);
  const restSoundRef = useRef(new Audio(restSound));
  const finishSoundRef = useRef(new Audio(finishSound));

  const onStartRest = () => {
    const restTime = 5; // 5 minutes rest session

    setRest((prevValue) => ({
      ...prevValue,
      minutes: cycles * restTime,
      seconds: 0,
      // minutes: 0,
      // seconds: 10,
    }));

    const playSound = () => {
      restSoundRef.current.play();
    };

    const playFinishSound = () => {
      finishSoundRef.current.play();
    };

    timerRef.current = setInterval(() => {
      setRest((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsRestFinished(true);
          playFinishSound();
          return prevValue;
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

  const toggleSound = () => {
    if (restSoundRef.current.muted) {
      restSoundRef.current.muted = false;
    } else {
      restSoundRef.current.muted = true;
    }
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
      minutes: cycles * restTime,
      // minutes: 0,
      // seconds: 10,
    }));
  }, [cycles]);

  // const textColor = "#02A17A";
  // const bgColor = "#7be382";

  return (
    <div>
      {!isRestFinished && (
        <div>
          <CountersMessage
            message="Relax, It's Break Time"
            messageStyle="mt-2 text-bold text-lg text-teal-600"
          />
          <CountersMessage
            message="Pause and Recharge"
            messageStyle={`${
              !isRestFinished
                ? "font-normal text-xl text-teal-600 animate-pulse"
                : ""
            }`}
          />
        </div>
      )}
      <div>
        {cycles > 0 && isSessionFinished && (
          <div className="flex md:gap-2 items-center">
            <div className="flex md:flex-col items-center gap-1 text-6xl md:text-8xl select-none">
              <MinutesCounter
                minutes={rest.minutes}
                textColor="rest-counter-text"
              />
              <span className={`md:hidden font-thin text-rest-counter-text`}>
                :
              </span>
              <SecondsCounter
                seconds={rest.seconds}
                textColor="rest-counter-text"
              />
            </div>
            <Speaker toggleSound={toggleSound} color="pomodoro-rest-theme" />
          </div>
        )}
      </div>
      {isRestFinished && (
        <CountersMessage
          message="Break Time Ended"
          messageStyle="font-semibold text-lg mt-2 text-amber-600 animate-bounce"
        />
      )}
    </div>
  );
}

export default PomodoroRestCounter;
