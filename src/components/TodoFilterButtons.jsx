/* eslint-disable react/prop-types */
import categories from "../data/categoryOptions";
import TodoCategoryButton from "./TodoFilterButton";

function TodoFilterButtons() {
  return (
    <ul className="categories-scrollbar flex justify-between gap-1 p-1 mb-2 overflow-x-auto">
      {categories.map((button) => (
        <TodoCategoryButton key={button.id} button={button} />
      ))}
    </ul>
  );
}

export default TodoFilterButtons;
