/* eslint-disable react/prop-types */

function TimerButton(props) {
  const { onStartTimer } = props;

  return (
    <button
      type="button"
      onClick={onStartTimer}
      className="p-1 rounded-md text-white bg-black hover:shadow-lg"
    >
      Start
    </button>
  );
}

export default TimerButton;
