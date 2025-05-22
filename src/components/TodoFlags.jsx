/* eslint-disable react/prop-types */
import ClearButton from "./ClearButton";
import TodoLeftTodos from "./TodoLeftTodos";

function TodoFlags() {
  return (
    <section className="flex justify-between p-1">
      <TodoLeftTodos />
      <ClearButton />
    </section>
  );
}

export default TodoFlags;
