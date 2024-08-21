/* eslint-disable react/prop-types */

function PomodoroCycleSelector(props) {
  const { onValueChange, setCycles } = props;

  const onSelectChange = (e) => {
    const selectedCycles = e.target.value;
    // const sessionDuration = 25; // 25 minutes for each session
    // const breakDuration = 5; // 5 minutes for each session break

    // onValueChange({
    //   session: { minutes: cycles * sessionDuration, seconds: 0 },
    //   break: { minutes: cycles * breakDuration, seconds: 0 },
    // });

    setCycles(selectedCycles);
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <label htmlFor="cycles" className="text-black">
          Select Cycles
          <select
            id="cycles"
            onChange={onSelectChange}
            className="text-white ms-1"
          >
            Select Cycles
            <option value="1" defaultValue>
              1 Cycle
            </option>
            <option value="2">2 Cycles</option>
            <option value="3">3 Cycles</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default PomodoroCycleSelector;
