/* eslint-disable react/prop-types */

const categoryOptions = [
  { id: "personal", name: "category-option", value: "personal" },
  { id: "work", name: "category-option", value: "work" },
  { id: "study", name: "category-option", value: "study" },
  { id: "other", name: "category-option", value: "other" },
];

function TodoCategoryOptions(props) {
  const { setCategory } = props;

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  return (
    <ul className="flex items-center gap-3">
      {categoryOptions.map((option, i) => (
        <li key={i}>
          <input
            type="radio"
            name={option.name}
            id={option.id}
            value={option.value}
            onChange={handleCategorySelection}
            className="peer hidden"
          />
          <label
            htmlFor={option.id}
            className="inline-flex items-center justify-between w-full p-2 text-gray-500 hover:text-black bg-white hover:bg-gray-100 border border-gray-200 hover:border-blue-300 rounded-lg peer-checked:border-gray-400 peer-checked:text-blue-600 cursor-pointer"
          >
            {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TodoCategoryOptions;
