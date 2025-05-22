/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { categoryTypes } from "../constants";

function TodoLeftTodos() {
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);
  const todosList = useSelector((state) => state.todos.list);
  const { leftTodos } = getUncheckedCount();

  function getUncheckedCount() {
    const count =
      selectedFilter === categoryTypes.ALL
        ? todosList.filter((todo) => !todo.isChecked)
        : todosList.filter(
            (todo) => todo.category === selectedFilter && !todo.isChecked
          );

    return { leftTodos: count.length };
  }

  return (
    <>
      <p className="text-label-color select-none ">
        {leftTodos === 1
          ? `${leftTodos} todo left`
          : leftTodos > 1
          ? `${leftTodos} todos left`
          : ""}
      </p>
    </>
  );
}

export default TodoLeftTodos;
