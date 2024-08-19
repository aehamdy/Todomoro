import { useState } from "react";
import PomodoroCyclesFlag from "./PomodoroCyclesFlag";

function PomodoroCycleSelector() {
  const [cycles, setCycles] = useState("");

  const onSelectChange = (e) => {
    const val = e.target.value;
    setCycles(val);
  };

  return (
    <div>
      <label htmlFor="cycles" className="text-black">
        Select Cycles
        <select
          id="cycles"
          onChange={onSelectChange}
          className="text-white ms-1"
        >
          Select Cycles
          <option value="1" defaultValue>
            1 Cycle
          </option>
          <option value="2">2 Cycles</option>
          <option value="3">3 Cycles</option>
        </select>
      </label>
      <PomodoroCyclesFlag cycles={cycles} />
    </div>
  );
}

export default PomodoroCycleSelector;
