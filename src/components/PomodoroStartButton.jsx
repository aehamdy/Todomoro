/* eslint-disable react/prop-types */

function PomodoroStartButton(props) {
  const { cycles, onSetInput } = props;

  const onClickHandler = () => {
    const sesstionDuration = 25; // 25 minutes for each session
    const breakDuration = 5; // 5 minutes for each session break
    onSetInput({
      session: cycles * sesstionDuration,
      break: cycles * breakDuration,
    });
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
