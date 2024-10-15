/* eslint-disable react/prop-types */
import { useState } from "react";

const iconSize = "30";
const strokeWidth = "1.6";

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 16v-3m0 0v-3m0 3H9m3 0h3m6-7-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
  </svg>
);

const minusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 13h6m6-7-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
  </svg>
);

function TimerInput(props) {
  const { setError, onValueChange } = props;
  const [value, setValue] = useState(0);

  const increaseTimer = () => {
    setValue((value) => value + 1);
  };

  const decreaseTimer = () => {
    setValue((value) => value - 1);
  };

  const onInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue) && inputValue > 0) {
      setError(false);
      setValue(inputValue);
      onValueChange(inputValue);
    } else {
      setError(true);
      setValue(0);
      onValueChange(0);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4 divide-x-2 text-black rounded-md">
      <button
        onClick={decreaseTimer}
        className="py-1 px-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
      >
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        className="w-12 py-1 px-2 text-[#222] bg-white rounded-md focus:outline-none"
        required
      />
      <button
        onClick={increaseTimer}
        className="py-1 px-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
      >
        +
      </button>
    </div>
  );
}

export default TimerInput;
