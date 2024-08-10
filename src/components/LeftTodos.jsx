/* eslint-disable react/prop-types */
function LeftTodos(props) {
  const { handleLeftTodos } = props;
  return (
    <p>
      {handleLeftTodos === 1
        ? `${handleLeftTodos} todo left`
        : handleLeftTodos > 1
        ? `${handleLeftTodos} todos left`
        : ""}
    </p>
  );
}

export default LeftTodos;
