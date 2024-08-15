/* eslint-disable react/prop-types */
import ClearButton from "./ClearButton";
import LeftTodos from "./LeftTodos";

function TodoFlags(props) {
  const { leftTodos, save, setTodos, todos, handleLeftTodos } = props;

  return (
    <section className="flex justify-between p-1">
      <LeftTodos leftTodos={leftTodos} />
      <ClearButton
        save={save}
        todos={todos}
        setTodos={setTodos}
        handleLeftTodos={handleLeftTodos}
      />
    </section>
  );
}

export default TodoFlags;
