/* eslint-disable react/prop-types */
import { useState } from "react";

function TimerInput(props) {
  const { setError, onValueChange } = props;
  const [value, setValue] = useState(0);

  const increaseTimer = () => {
    const newValue = value + 1;
    setValue(newValue);
    onValueChange(newValue);
    setError(false);
  };

  const decreaseTimer = () => {
    const newValue = value > 0 ? value - 1 : 0;
    setValue(newValue);
    onValueChange(newValue);
    setError(false);
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    const inputValue = parseInt(e.target.value, 10);
    console.log(inputValue);

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
        className="py-1 px-3 text-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-500 rounded-md duration-short"
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
        className="py-1 px-3 text-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-500 rounded-md duration-short"
      >
        +
      </button>
    </div>
  );
}

export default TimerInput;
