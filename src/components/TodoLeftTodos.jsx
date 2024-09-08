/* eslint-disable react/prop-types */

function TodoLeftTodos(props) {
  const { leftTodos } = props;
  return (
    <section className="flex justify-between">
      <div>
        <p className="text-label-color ">
          {leftTodos === 1
            ? `${leftTodos} todo left`
            : leftTodos > 1
            ? `${leftTodos} todos left`
            : ""}
        </p>
      </div>
      <div></div>
    </section>
  );
}

export default TodoLeftTodos;
