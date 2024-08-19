/* eslint-disable react/prop-types */

function PomodoroCycleSelector(props) {
  const { onValueChange } = props;

  const onSelectChange = (e) => {
    onValueChange(e.target.value);
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
