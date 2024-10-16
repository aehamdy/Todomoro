/* eslint-disable react/prop-types */
import { categoryOptions } from "../constants";

const options = [
  ...categoryOptions.map((option) => ({
    ...option,
    name: "category-option",
    id: option.id + "-option",
  })),
];

function TodoCategoryOptions(props) {
  const { setCategory } = props;

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="w-full">
      <ul className="categories-options-scrollbar overflow-x-auto flex justify-between items-center gap-1 py-1 px-2 md:py-2 md:px-4">
        {options.map((option) => (
          <li key={option.id} className="flex items-center">
            <input
              type="radio"
              name={`${option.name}`}
              id={option.id}
              value={option.value}
              onChange={handleCategorySelection}
              className="peer hidden"
              defaultChecked={option.value === "personal"}
            />
            <label
              htmlFor={option.id}
              className="inline-flex items-center justify-between gap-2 w-full p-1.5 md:p-2 text-gray-500 hover:text-black peer-checked:text-blue-500 peer-checked:font-bold bg-white hover:bg-gray-100 border peer-checked:bg-gray-100 border-gray-200 hover:border-gray-300 peer-checked:border-blue-300 rounded-lg cursor-pointer"
            >
              <span>{option.icon}</span>
              {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCategoryOptions;
