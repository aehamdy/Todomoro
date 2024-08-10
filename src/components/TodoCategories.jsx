/* eslint-disable react/prop-types */
function TodoCategories(props) {
  const { setCategory } = props;

  const handleCategorySelection = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <select onChange={handleCategorySelection} className="p-1 rounded-md">
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="study">Study</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default TodoCategories;
