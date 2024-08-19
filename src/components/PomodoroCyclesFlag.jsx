/* eslint-disable react/prop-types */
function PomodoroCyclesFlag(props) {
  const { cycles } = props;

  return (
    <p className="text-red-500">
      {cycles} {cycles > 1 ? `Cycles` : `Cycle`} = {cycles * 25} minutes +{" "}
      {cycles * 5} minutes break
    </p>
  );
}

export default PomodoroCyclesFlag;
