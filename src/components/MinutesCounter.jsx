/* eslint-disable react/prop-types */
function MinutesCounter({ minutes }) {
  return (
    <span className={`font-semibold text-counter-text`}>
      {minutes < 10 ? `0${minutes}` : minutes}
    </span>
  );
}

export default MinutesCounter;
