/* eslint-disable react/prop-types */
function SecondsCounter({ seconds, textColor }) {
  return (
    <span className={`font-thin text-${textColor}`}>
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

export default SecondsCounter;
