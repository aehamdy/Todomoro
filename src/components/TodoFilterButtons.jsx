/* eslint-disable react/prop-types */
import categories from "../data/categoryOptions";
import TodoFilterButton from "./TodoFilterButton";

function TodoFilterButtons() {
  return (
    <ul className="categories-scrollbar flex justify-between gap-1 p-1 mb-2 overflow-x-auto">
      {categories.map((button) => (
        <TodoFilterButton key={button.id} button={button} />
      ))}
    </ul>
  );
}

export default TodoFilterButtons;
