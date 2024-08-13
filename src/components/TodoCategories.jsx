/* eslint-disable react/prop-types */

function TodoCategories(props) {
  const { setCategory } = props;

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleCategorySelection}
        className="w-32 p-1 rounded-md text-black bg-orange-50 hover:shadow-lg transition duration-medium cursor-pointer"
      >
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="study">Study</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default TodoCategories;
