import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section>
      <input
        type="number"
        value={value}
        onChange={onInputChange}
        className="bg-slate-300"
      />
      <button type="button" className="text-black">
        Start
      </button>
    </section>
  );
}

export default Counter;
