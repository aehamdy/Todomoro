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
      <div className="w-fit flex items-center gap-1 py-0 px-0 mx-auto text-black bg-blue-300 rounded-lg">
        <label
          htmlFor="pomodoro"
          className={`rounded-s-lg py-1 px-2 ${
            selectedTimer === "pomodoro" && "bg-red-500 text-white"
          } cursor-pointer`}
        >
          <input
            type="radio"
            id="pomodoro"
            name="selected_timer"
            value="pomodoro"
            checked={selectedTimer === "pomodoro"}
            onChange={handleTimerChange}
            className={`appearance-none ${
              selectedTimer === "pomodoro" && "bg-red-400 text-white"
            }`}
          />
          Pomodoro
        </label>
        <label
          htmlFor="timer"
          className={`rounded-e-lg py-1 px-2 ${
            selectedTimer === "timer" && "bg-red-500 text-white"
          } cursor-pointer`}
        >
          <input
            type="radio"
            id="timer"
            name="selected_timer"
            value="timer"
            checked={selectedTimer === "timer"}
            onChange={handleTimerChange}
            className="appearance-none"
          />
          Timer
        </label>
      </div>
      <div>
        {selectedTimer === "pomodoro" ? (
          <PomodoroTimer />
        ) : selectedTimer === "timer" ? (
          <Timer />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Counters;
