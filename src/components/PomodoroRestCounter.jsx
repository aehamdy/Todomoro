/* eslint-disable react/prop-types */
import restSound from "../sounds/pomodoro-rest-tick-sound.mp3";
import { useEffect, useRef, useState } from "react";
import Speaker from "./Speaker";

function PomodoroRestCounter(props) {
  const { cycles, isSessionFinished, setIsSessionFinished } = props;
  const [rest, setRest] = useState({
    minutes: 0,
    seconds: 0,
  });
  const timerRef = useRef(null);
  const restSoundRef = useRef(new Audio(restSound));

  const onStartRest = () => {
    const restTime = 5; // 5 minutes rest session

    setRest((prevValue) => ({
      ...prevValue,
      // minutes: cycles * restTime,
      // seconds: 0,
      minutes: 0,
      seconds: 20,
    }));

    const playSound = () => {
      restSoundRef.current.play();
    };

    timerRef.current = setInterval(() => {
      setRest((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          setIsSessionFinished(false);
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
      minutes: 10,
      seconds: 0,
    }));
  }, [cycles]);

  const toggleSound = () => {
    if (restSoundRef.current.muted) {
      restSoundRef.current.muted = false;
    } else {
      restSoundRef.current.muted = true;
    }
  };

  const textColor = "#02A17A";
  const bgColor = "#7be382";

  return (
    cycles > 0 && (
      <div className="flex md:gap-2 items-center">
        <div className="flex md:flex-col items-center gap-1 text-8xl select-none">
          <span className={`font-semibold text-rest-counter-text`}>
            {rest.minutes < 10 ? `0${rest.minutes}` : rest.minutes}
          </span>
          <span className={`md:hidden font-thin text-rest-counter-text`}>
            :
          </span>
          <span className={`font-normal text-rest-counter-text`}>
            {rest.seconds < 10 ? `0${rest.seconds}` : rest.seconds}
          </span>
        </div>
        <Speaker toggleSound={toggleSound} color="pomodoro-rest-theme" />
      </div>
    )
  );
}

export default PomodoroRestCounter;
