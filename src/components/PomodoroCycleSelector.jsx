/* eslint-disable react/prop-types */

function PomodoroCycleSelector(props) {
  const { setCycles } = props;

  const onSelectChange = (e) => {
    const selectedCycles = e.target.value;
    setCycles(selectedCycles);
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <label htmlFor="cycles" className="text-black w-52">
          <select
            id="cycles"
            onChange={onSelectChange}
            defaultValue=""
            className=" w-fit block p-1 rounded text-white bg-blue-500 focus:outline-none"
          >
            <option value="" defaultValue disabled>
              Select Cycles
            </option>
            <option className="flex flex-col hover:bg-red-500" value="1">
              One Cycle
            </option>
            <option value="2">Two Cycles</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default PomodoroCycleSelector;
