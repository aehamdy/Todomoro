/* eslint-disable react/prop-types */

function LeftTodos(props) {
  const { leftTodos } = props;
  return (
    <section className="flex justify-between px-2 mb-1">
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

export default LeftTodos;
