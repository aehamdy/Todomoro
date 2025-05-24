/* eslint-disable react/prop-types */
import Icon from "./Icon";

function TodoItemEditButton({ todo, setTodoEditState }) {
  const handleClick = () => {
    setTodoEditState((prev) => ({ ...prev, edit: true }));
  };

  return (
    !todo.isChecked && (
      <button
        type="button"
        onClick={handleClick}
        className="p-1 text-gray-500 hover:text-blue-500 duration-short"
      >
        <Icon name="edit" />
      </button>
    )
  );
}

export default TodoItemEditButton;
