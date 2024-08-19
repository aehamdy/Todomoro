/* eslint-disable react/prop-types */

function OtherButtons(props) {
  const { onStopClick, isPaused, onPauseClick, onPlayClick } = props;

  return (
    <div className="flex justify-evenly">
      <button
        type="button"
        onClick={onStopClick}
        className="p-1 rounded-md text-white bg-red-600 hover:shadow-lg"
      >
        Stop
      </button>
      {!isPaused ? (
        <button
          type="button"
          onClick={onPauseClick}
          className="p-1 rounded-md text-white bg-red-600 hover:shadow-lg"
        >
          Pause
        </button>
      ) : (
        <button
          type="button"
          onClick={onPlayClick}
          className="p-1 rounded-md text-white bg-red-600 hover:shadow-lg"
        >
          Play
        </button>
      )}
    </div>
  );
}

export default OtherButtons;
