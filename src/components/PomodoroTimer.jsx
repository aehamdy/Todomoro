import { useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";
import PomodoroStartButton from "./PomodoroStartButton";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const onValueChange = (val) => {
    setCycles(val);
  };

  const onSetInput = (val) => {
    setInputValue(val);
  };

  return (
    <section>
      <div className="flex justify-evenly items-center">
        <PomodoroCycleSelector onValueChange={onValueChange} />
        <PomodoroStartButton cycles={cycles} onSetInput={onSetInput} />
      </div>
      <div>
        <PomodoroCyclesFlag cycles={cycles} />
      </div>
    </section>
  );
}

export default PomodoroTimer;
