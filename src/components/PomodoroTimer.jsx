import { useState } from "react";
import PomodoroCycleSelector from "./PomodoroCycleSelector";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";
import PomodoroStartButton from "./PomodoroStartButton";

function PomodoroTimer() {
  const [cycles, setCycles] = useState(0);

  const onValueChange = (val) => {
    setCycles(val);
  };

  return (
    <section>
      <div className="flex justify-evenly items-center">
        <PomodoroCycleSelector onValueChange={onValueChange} />
        <PomodoroStartButton />
      </div>
      <div>
        <PomodoroCyclesFlag cycles={cycles} />
      </div>
    </section>
  );
}

export default PomodoroTimer;
