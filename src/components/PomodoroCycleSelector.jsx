/* eslint-disable react/prop-types */

function PomodoroCycleSelector(props) {
  const { setCycles } = props;

  const onSelectChange = (e) => {
    const selectedCycles = e.target.value;
    setCycles(selectedCycles);

    // const sessionDuration = 25; // 25 minutes for each session
    // const breakDuration = 5; // 5 minutes for each session break

    // onValueChange({
    //   minutes: selectedCycles * sessionDuration,
    //   seconds: 0,
    // });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <label htmlFor="cycles" className="text-black">
          <select
            id="cycles"
            onChange={onSelectChange}
            className="text-white ms-1"
            defaultValue=""
          >
            <option value="" defaultValue disabled>
              Select Cycles
            </option>
            <option value="1">1 Cycle</option>
            <option value="2">2 Cycles</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default PomodoroCycleSelector;
