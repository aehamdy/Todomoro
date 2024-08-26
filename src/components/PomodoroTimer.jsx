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

  const sectionBg = () => {
    return isSessionFinished ? "bg-[#F2FFF5]" : "bg-[#FFF2F2]";
    // if (isSessionFinished) {
    //   return "bg-[#F2FFF5]";
    // } else if (!isSessionFinished) {
    //   return "bg-[#FFF2F2]";
    // } else if (isSessionFinished === null) {
    //   return "";
    // }
  };

  return (
    <section className={`${sectionBg()} rounded-lg py-2`}>
      <div className="flex justify-evenly items-center">
        <PomodoroCycleSelector setCycles={setCycles} />
        {cycles && (
          <PomodoroStartButton onStartSession={handleStartButtonClick} />
        )}
      </div>
      <div>{/* <PomodoroCyclesFlag cycles={cycles} /> */}</div>
      <div className="flex flex-col items-center text-black">
        {!isSessionFinished && (
          <PomodoroCounter
            cycles={cycles}
            onStartSessionRef={onStartSessionRef}
            setIsSessionFinished={setIsSessionFinished}
          />
        )}
        {isSessionFinished && (
          <PomodoroRestCounter
            cycles={cycles}
            isSessionFinished={isSessionFinished}
          />
        )}
      </div>
      <div></div>
    </section>
  );
}

export default PomodoroTimer;
