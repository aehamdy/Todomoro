/* eslint-disable react/prop-types */

function OtherButtons(props) {
  const { onStopClick, isPaused, onPauseClick, onPlayClick } = props;

  const iconSize = 30;

  const playIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z"
      />
    </svg>
  );
  const stopIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.3 21h5.4c4.5 0 6.3-1.8 6.3-6.3V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3v5.4C3 19.2 4.8 21 9.3 21Z"
      />
    </svg>
  );
  const pauseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z"
      />
    </svg>
  );

  return (
    <div className="flex justify-evenly my-6">
      <button
        type="button"
        onClick={onStopClick}
        className="p-1 rounded-md bg-white hover:shadow-lg cursor-pointer"
      >
        {stopIcon}
      </button>
      {!isPaused ? (
        <button
          type="button"
          onClick={onPauseClick}
          className="p-1 rounded-md bg-white hover:shadow-lg cursor-pointer"
        >
          {pauseIcon}
        </button>
      ) : (
        <button
          type="button"
          onClick={onPlayClick}
          className="p-1 rounded-md bg-white hover:shadow-lg cursor-pointer"
        >
          {playIcon}
        </button>
      )}
    </div>
  );
}

export default OtherButtons;
