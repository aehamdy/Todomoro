/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { categoryTypes } from "../constants";
import TodoItem from "./TodoItem";

function TodoList() {
  const todosList = useSelector((state) => state.todos.list);
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);

  const filteredTodos =
    selectedFilter === categoryTypes.ALL
      ? todosList
      : todosList.filter((todo) => todo.category === selectedFilter);

  return (
    <ul className="list-scrollbar relative border border-white rounded-lg h-[54dvh] overflow-y-scroll overflow-x-hidden py-2 px-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
