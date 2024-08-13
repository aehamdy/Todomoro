/* eslint-disable react/prop-types */
import { LOCAL_STORAGE_KEY } from "./InputForm";

function ClearButton(props) {
  const { save, setTodos, todos } = props;

  const handleClear = () => {
    const allTodos =
      localStorage.getItem(LOCAL_STORAGE_KEY) &&
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    const uncheckedTodos = allTodos.filter((todo) => todo.isChecked === false);

    setTodos(uncheckedTodos);
    save(uncheckedTodos);
  };

  const checkedTodos = (todos) => {
    return todos.isChecked;
  };

  return (
    todos.find(checkedTodos) && (
      <button
        type="button"
        onClick={handleClear}
        className="appearance-none text-warning-color hover:underline"
      >
        Clear completed
      </button>
    )
  );
}

export default ClearButton;
