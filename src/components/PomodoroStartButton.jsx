import { useState } from "react";

function PomodoroStartButton() {
  const [sessionValue, setSessionValue] = useState(0);

  const onClickHandler = () => {
    const session = 25; // 25 minutes for each session
    const breakTime = 5; // 5 minutes for each session break
  };

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className="bg-black text-white p-1 rounded"
    >
      Start
    </button>
  );
}

export default PomodoroStartButton;
