/* eslint-disable react/prop-types */

function TodoCategoriesDropdown(props) {
  const { setCategory } = props;

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleCategorySelection}
        className="w-28 p-1 rounded-md text-black bg-[#fffafa] hover:shadow-lg transition duration-medium cursor-pointer"
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="study">Study</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default TodoCategoriesDropdown;
