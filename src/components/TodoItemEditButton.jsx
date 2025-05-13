/* eslint-disable react/prop-types */
import TodoIcon from "./TodoIcon";

function TodoItemEditButton({ todo }) {
  return (
    !todo.isChecked && (
      <button type="button" className="w-[18px]">
        <TodoIcon icon="editIcon" />
      </button>
    )
  );
}

export default TodoItemEditButton;
