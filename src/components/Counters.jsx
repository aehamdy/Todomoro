import PomodoroTimer from "./PomodoroTimer";
import Timer from "./Timer";

function Counters() {
  return (
    <section>
      <div>
        <label htmlFor="pomodoro">
          <input
            type="radio"
            id="pomodoro"
            name="selected_timer"
            value="pomodoro"
          />
          Pomodoro
        </label>
        <label htmlFor="timer">
          <input type="radio" id="timer" name="selected_timer" value="timer" />
          Timer
        </label>
      </div>
      <div>
        <PomodoroTimer /> <Timer />
      </div>
    </section>
  );
}

export default Counters;
