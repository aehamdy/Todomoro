/* eslint-disable react/prop-types */

function TodoLeftTodos(props) {
  const { leftTodos } = props;
  return (
    <p className="text-label-color select-none ">
      {leftTodos === 1
        ? `${leftTodos} todo left`
        : leftTodos > 1
        ? `${leftTodos} todos left`
        : ""}
    </p>
  );
}

export default TodoLeftTodos;
