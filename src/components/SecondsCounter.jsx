/* eslint-disable react/prop-types */
function SecondsCounter({ seconds }) {
  return (
    <span className={`font-thin text-counter-text`}>
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

export default SecondsCounter;
