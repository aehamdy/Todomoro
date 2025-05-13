/* eslint-disable react/prop-types */
import { categoryTypes } from "../constants";
import categories from "../data/categoryOptions";
import TodoCategoryOption from "./TodoCategoryOption";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/todo/todoSlice";

function TodoCategoryOptions() {
  const dispatch = useDispatch();

  const handleCategorySelection = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <div className="w-full">
      <ul className="categories-options-scrollbar overflow-x-auto flex justify-between items-center gap-1 py-1 px-2 md:py-2 md:px-4">
        {categories.map((option) => {
          return (
            option.value.toLowerCase() !== categoryTypes.ALL && (
              <TodoCategoryOption
                key={option.id}
                option={option}
                handleCategorySelection={handleCategorySelection}
              />
            )
          );
        })}
      </ul>
    </div>
  );
}

export default TodoCategoryOptions;
