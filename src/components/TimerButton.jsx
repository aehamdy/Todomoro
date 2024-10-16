/* eslint-disable react/prop-types */
const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
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

function TimerButton(props) {
  const { onStartTimer } = props;

  return (
    <button
      type="button"
      onClick={onStartTimer}
      className="py-1 px-2 bg-white rounded-md hover:shadow-lg"
    >
      {playIcon}
    </button>
  );
}

export default TimerButton;
