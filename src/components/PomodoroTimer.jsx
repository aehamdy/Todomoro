import { useRef, useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";
import PomodoroStartButton from "./PomodoroStartButton";
import PomodoroCounter from "./PomodoroCounter";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(0);
  const [inputValue, setInputValue] = useState({
    minutes: 0,
    seconds: 0,
  });
  const timerRef = useRef(null);

  const onValueChange = (val) => {
    setInputValue(val);
  };

  const onStartSession = () => {
    const sessionDuration = 1; // 25 minutes session
    // const restDuration = 5; // 5 minutes rest

    setInputValue((prevValue) => ({
      ...prevValue,
      minutes: cycles * sessionDuration,
      seconds: 0,
    }));

    timerRef.current = setInterval(() => {
      setInputValue((prevValue) => {
        const { minutes, seconds } = prevValue;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
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
        {/* {console.log(inputValue.session)}
        {console.log(inputValue.rest)} */}
        <PomodoroStartButton onStartSession={onStartSession} />
      </div>
      <div>
        <PomodoroCyclesFlag cycles={cycles} />
      </div>
      <div className="flex justify-center">
        <PomodoroCounter inputValue={inputValue} />
      </div>
    </section>
  );
}

export default PomodoroTimer;
