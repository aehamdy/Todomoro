import { useState } from "react";
import PomodoroTimer from "./PomodoroTimer";
import Timer from "./Timer";

function Counters() {
  const [selectedTimer, setSelectedTimer] = useState();

  const handleTimerChange = (e) => {
    setSelectedTimer(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section>
      <div>
        <label htmlFor="pomodoro">
          <input
            type="radio"
            id="pomodoro"
            name="selected_timer"
            value="pomodoro"
            checked={selectedTimer === "pomodoro"}
            onChange={handleTimerChange}
          />
          Pomodoro
        </label>
        <label htmlFor="timer">
          <input
            type="radio"
            id="timer"
            name="selected_timer"
            value="timer"
            checked={selectedTimer === "timer"}
            onChange={handleTimerChange}
          />
          Timer
        </label>
      </div>
      <div>{selectedTimer === "pomodoro" ? <PomodoroTimer /> : <Timer />}</div>
    </section>
  );
}

export default Counters;
