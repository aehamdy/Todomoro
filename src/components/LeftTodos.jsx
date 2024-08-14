/* eslint-disable react/prop-types */
import ClearButton from "./ClearButton";

function LeftTodos(props) {
  const { handleLeftTodos, leftTodos, save, setTodos, todos } = props;
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
      <div>
        <ClearButton
          save={save}
          setTodos={setTodos}
          todos={todos}
          handleLeftTodos={handleLeftTodos}
          leftTodos={leftTodos}
        />
      </div>
    </section>
  );
}

export default LeftTodos;
