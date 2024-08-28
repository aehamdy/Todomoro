import { useState } from "react";
import PomodoroTimer from "./PomodoroTimer";
import Timer from "./Timer";

function Counters() {
  const [selectedTimer, setSelectedTimer] = useState();

  const handleTimerChange = (e) => {
    setSelectedTimer(e.target.value);
  };

  // Colors: #91915B #FFCB94 #FFEBB5 #F87C4D #A4404C
  // Colors: #FCC201 #DA9101 #940D21 #CF2121 #ED5742
  // Colors: #C4F0C5 #F1FFF1 #9EBFCB

  return (
    <section>
      <div className="w-fit flex items-center gap-1 py-0 px-0 mx-auto text-black bg-[#fffafa] rounded-lg">
        <label
          htmlFor="pomodoro"
          className={`rounded-s-lg py-1 px-2 ${
            selectedTimer === "pomodoro" && "bg-[#F87C4D] text-white"
          } cursor-pointer`}
        >
          <input
            type="radio"
            id="pomodoro"
            name="selected_timer"
            value="pomodoro"
            checked={selectedTimer === "pomodoro"}
            onChange={handleTimerChange}
            className="appearance-none"
          />
          Pomodoro
        </label>
        <label
          htmlFor="timer"
          className={`rounded-e-lg py-1 px-2 ${
            selectedTimer === "timer" && "bg-[#ff5945] text-white"
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
      <div className="my-3">
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
