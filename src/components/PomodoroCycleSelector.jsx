/* eslint-disable react/prop-types */

import PomodoroCycleOption from "./PomodoroCycleOption";

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
          <PomodoroCycleOption
            name="cycles"
            id="one"
            value="1"
            onSelectChange={onSelectChange}
          />
          <PomodoroCycleOption
            name="cycles"
            id="two"
            value="2"
            onSelectChange={onSelectChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PomodoroCycleSelector;
