/* eslint-disable react/prop-types */
import { LOCAL_STORAGE_KEY } from "./InputForm";

function ClearButton(props) {
  const { save, setTodos } = props;

  const handleClear = () => {
    const allTodos =
      localStorage.getItem(LOCAL_STORAGE_KEY) &&
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    const uncheckedTodos = allTodos.filter((todo) => todo.isChecked === false);

    setTodos(uncheckedTodos);
    save(uncheckedTodos);
  };

  return (
    <button type="button" onClick={handleClear}>
      Clear completed
    </button>
  );
}

export default ClearButton;
