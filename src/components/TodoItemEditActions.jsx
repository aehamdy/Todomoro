/* eslint-disable react/prop-types */
import Icon from "./Icon";

function TodoItemEditActions({ handleCancelEdit, handleSaveEdit }) {
  return (
    <div
      className="flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={handleCancelEdit}
        className="p-1 bg-gray-100 hover:bg-white hover:shadow-md active:shadow-none rounded-full duration-medium"
      >
        <Icon name="close" />
      </button>

      <button
        type="button"
        onClick={handleSaveEdit}
        className="p-1 bg-gray-100 hover:bg-white hover:shadow-md active:shadow-none rounded-full duration-medium"
      >
        <Icon name="check" />
      </button>
    </div>
  );
}

export default TodoItemEditActions;
