/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { categoryTypes } from "../constants";
import CategoryLabel from "./CategoryLabel";
import Icon from "./Icon";
import { setSelectedCategory } from "../features/todo/todoSlice";

function TodoCategoryOption({ option }) {
  const selectedCategory = useSelector((state) => state.todos.selectedCategory);
  const dispatch = useDispatch();

  const handleCategorySelection = () => {
    dispatch(setSelectedCategory(option.value));
  };

  return (
    <li key={option.id} className="flex items-center">
      <label
        htmlFor={option.id}
        className={`inline-flex items-center justify-between gap-2 w-full p-1.5 md:p-2 ${
          selectedCategory === option.value
            ? "font-bold text-blue-500 bg-blue-100 border-blue-200 hover:border-blue-500 duration-medium"
            : "text-stone-500 bg-white hover:bg-gray-100 border-gray-100"
        } border rounded-lg cursor-pointer`}
      >
        <input
          type="radio"
          name="category-option"
          id={option.id}
          className="hidden"
          value={option.value}
          onChange={handleCategorySelection}
          defaultChecked={option.value.toLowerCase() === categoryTypes.PERSONAL}
        />

        <Icon name={option.icon} />

        <CategoryLabel label={option.value} />
      </label>
    </li>
  );
}

export default TodoCategoryOption;
