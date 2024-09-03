import { useRef, useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroStartButton from "./PomodoroStartButton";
import PomodoroCounter from "./PomodoroCounter";
import PomodoroRestCounter from "./PomodoroRestCounter";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(null);
  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const [isSessionRunning, setIsSessionRunning] = useState(false);
  const onStartSessionRef = useRef(null);

  const handleStartButtonClick = () => {
    setIsSessionRunning(true);
    if (onStartSessionRef.current) {
      onStartSessionRef.current();
    }
  };

  const sectionBg = () => {
    // return isSessionFinished ? "bg-[#F2FFF5]" : "bg-[#FFF2F2]";
    // return isSessionFinished ? "bg-[#F2FFF5]" : "bg-[#95B3D7]";
    // return isSessionFinished ? "bg-[#F2FFF5]" : "bg-counter-bg";
    return isSessionFinished ? "bg-rest-counter-bg" : "bg-counter-bg";
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
        {!isSessionRunning && <PomodoroCycleSelector setCycles={setCycles} />}
        {cycles && !isSessionRunning && (
          <PomodoroStartButton
            onStartSession={handleStartButtonClick}
            cycles={cycles}
          />
        )}
      </div>
      <div>{/* <PomodoroCyclesFlag cycles={cycles} /> */}</div>
      <div className="flex flex-col items-center text-black">
        {cycles && !isSessionFinished && (
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
            setIsSessionFinished={setIsSessionFinished}
          />
        )}
      </div>
    </section>
  );
}

export default PomodoroTimer;
