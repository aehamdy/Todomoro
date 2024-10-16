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
        <div className="flex justify-between gap-10">
          <div className="flex">
            <input
              type="radio"
              name="cycles"
              id="one-cycle"
              value="1"
              onChange={onSelectChange}
              className="peer hidden"
            />
            <label
              htmlFor="one-cycle"
              className="py-2 px-2 md:py-3 md:px-4 text-sm md:text-base text-white bg-blue-400 hover:bg-blue-500 peer-checked:bg-blue-500 rounded-full hover:shadow-lg peer-checked:shadow-lg duration-short cursor-pointer"
              // className="peer-checked:outline-dashed peer-checked:outline-blue-400 peer-checked:border-4 border-white rounded-full cursor-pointer"
            >
              <span>1</span>
              Cycle
            </label>
          </div>
          <div className="flex">
            <input
              type="radio"
              name="cycles"
              id="two-cycle"
              value="2"
              onChange={onSelectChange}
              className="peer hidden"
            />
            <label
              htmlFor="two-cycle"
              className="py-2 px-2 md:py-3 md:px-4 text-sm md:text-base text-white bg-blue-400 hover:bg-blue-500 peer-checked:bg-blue-500 rounded-full hover:shadow-lg peer-checked:shadow-lg duration-short cursor-pointer"
            >
              <span>2</span>
              Cycles
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PomodoroCycleSelector;
