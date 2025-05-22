import { useDispatch, useSelector } from "react-redux";
import { removeCompletedTodos } from "../features/todo/todoSlice";
import { categoryTypes } from "../constants";

function ClearButton() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.list);
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);

  const handleClick = () => {
    dispatch(removeCompletedTodos(selectedFilter));
  };

  const showClearButton = () => {
    return selectedFilter === categoryTypes.ALL
      ? todoList.find((todo) => todo.isChecked)
      : todoList.find(
          (todo) => todo.category === selectedFilter && todo.isChecked
        );
  };

  return (
    showClearButton() && (
      <button
        type="button"
        onClick={handleClick}
        className="appearance-none text-warning-color hover:underline select-none"
      >
        Clear completed
      </button>
    )
  );
}

export default ClearButton;
