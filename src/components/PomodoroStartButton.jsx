/* eslint-disable react/prop-types */

function PomodoroStartButton(props) {
  const { onStartSession } = props;

  return (
    <button
      type="button"
      onClick={onStartSession}
      className="bg-black text-white p-1 rounded"
    >
      Start
    </button>
  );
}

export default PomodoroStartButton;
