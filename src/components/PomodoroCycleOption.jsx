/* eslint-disable react/prop-types */
function PomodoroCycleOption({ name, id, value, onSelectChange }) {
  return (
    <div className="flex">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onSelectChange}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className="py-2 px-2 md:py-3 md:px-4 text-sm md:text-base text-white bg-blue-400 hover:bg-blue-500 peer-checked:bg-blue-500 rounded-full hover:shadow-lg peer-checked:shadow-lg duration-short cursor-pointer"
        // className="peer-checked:outline-dashed peer-checked:outline-blue-400 peer-checked:border-4 border-white rounded-full cursor-pointer"
      >
        <span>{value}</span>
        {value == 1 ? " Cycle" : value > 1 ? " Cycles" : "Wrong Value"}
      </label>
    </div>
  );
}

export default PomodoroCycleOption;
