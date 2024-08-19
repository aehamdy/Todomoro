/* eslint-disable react/prop-types */

function TimerError(props) {
  const { error } = props;

  return <p>{error && `Value must be greater than 0`}</p>;
}

export default TimerError;
