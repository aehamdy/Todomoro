/* eslint-disable react/prop-types */

import { useState } from "react";

function TimerInput(props) {
  const { setError, onValueChange } = props;
  const [value, setValue] = useState(0);

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
    <input
      type="number"
      value={value}
      onChange={onInputChange}
      className="w-16 py-1 p-2 text-[#222] bg-white rounded-md hover:shadow-lg focus:outline-none"
    />
  );
}

export default TimerInput;
