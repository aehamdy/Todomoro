/* eslint-disable react/prop-types */
import { LOCAL_STORAGE_KEY } from "./TodoApp";

function ClearButton(props) {
  const { save, setTodos, todos, selectedCategory, handleLeftTodos } = props;

  const handleClear = () => {
    if (selectedCategory === "all") {
      const allTodos =
        localStorage.getItem(LOCAL_STORAGE_KEY) &&
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

      const uncheckedTodos = allTodos.filter((todo) => !todo.isChecked);

      setTodos(uncheckedTodos);
      handleLeftTodos(uncheckedTodos.length);
      save(uncheckedTodos);
    } else {
      const allTodos =
        localStorage.getItem(LOCAL_STORAGE_KEY) &&
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

      const uncheckedTodos = allTodos.filter(
        (todo) =>
          (todo.category === selectedCategory && !todo.isChecked) ||
          todo.category !== selectedCategory
      );

      setTodos(uncheckedTodos);
      handleLeftTodos(uncheckedTodos.length);
      save(uncheckedTodos);
    }
  };

  const checkedTodos = (todos) => {
    return todos.isChecked;
  };

  return (
    todos.find(checkedTodos) && (
      <button
        type="button"
        onClick={handleClear}
        className="appearance-none text-warning-color hover:underline select-none"
      >
        Clear completed
      </button>
    )
  );
}

export default ClearButton;
