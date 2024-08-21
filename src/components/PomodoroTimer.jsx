import { useRef, useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";
import PomodoroStartButton from "./PomodoroStartButton";
import PomodoroCounter from "./PomodoroCounter";
import PomodoroRestCounter from "./PomodoroRestCounter";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(0);
  const [inputValue, setInputValue] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const timerRef = useRef(null);

  const onValueChange = (val) => {
    setInputValue(val);
  };

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
    <section>
      <div className="flex justify-evenly items-center">
        <PomodoroCycleSelector
          setCycles={setCycles}
          onValueChange={onValueChange}
        />

        <PomodoroStartButton onStartSession={onStartSession} />
      </div>
      <div>
        <PomodoroCyclesFlag cycles={cycles} />
      </div>
      <div className="flex flex-col items-center text-black">
        <PomodoroCounter inputValue={inputValue} />
        <PomodoroRestCounter
          cycles={cycles}
          isSessionFinished={isSessionFinished}
        />
      </div>
    </section>
  );
}

export default PomodoroTimer;
