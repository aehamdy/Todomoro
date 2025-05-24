/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import Icon from "./Icon";

function TodoItemDeleteButton({ todoId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(todoId));
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="p-1 text-stone-400 hover:text-warning-color"
    >
      <Icon name="trash" />
    </button>
  );
}

export default TodoItemDeleteButton;
