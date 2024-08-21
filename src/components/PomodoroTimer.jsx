import { useRef, useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";
import PomodoroStartButton from "./PomodoroStartButton";
import PomodoroCounter from "./PomodoroCounter";
import PomodoroRestCounter from "./PomodoroRestCounter";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(0);
  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const onStartSessionRef = useRef(null);

  const handleStartButtonClick = () => {
    if (onStartSessionRef.current) {
      onStartSessionRef.current();
    }
  };

  return (
    <section>
      <div className="flex justify-evenly items-center">
        <PomodoroCycleSelector setCycles={setCycles} />

        <PomodoroStartButton onStartSession={handleStartButtonClick} />
      </div>
      <div>
        <PomodoroCyclesFlag cycles={cycles} />
      </div>
      <div className="flex flex-col items-center text-black">
        <PomodoroCounter
          cycles={cycles}
          onStartSessionRef={onStartSessionRef}
          setIsSessionFinished={setIsSessionFinished}
        />
        <PomodoroRestCounter
          cycles={cycles}
          isSessionFinished={isSessionFinished}
        />
      </div>
    </section>
  );
}

export default PomodoroTimer;
