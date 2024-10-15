/* eslint-disable react/prop-types */
function MinutesCounter({ minutes, textColor }) {
  return (
    <span className={`font-semibold text-${textColor}`}>
      {minutes < 10 ? `0${minutes}` : minutes}
    </span>
  );
}

export default MinutesCounter;
