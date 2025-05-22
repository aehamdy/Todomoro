/* eslint-disable react/prop-types */
import Icon from "./Icon";

function TodoItemEditButton({ todo }) {
  return (
    !todo.isChecked && (
      <button
        type="button"
        className="text-gray-500 hover:text-blue-500 duration-short"
      >
        <Icon name="edit" />
      </button>
    )
  );
}

export default TodoItemEditButton;
