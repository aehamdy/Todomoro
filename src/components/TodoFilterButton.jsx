/* eslint-disable react/prop-types */
import Icon from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "../features/todo/todoSlice";

function TodoCategoryButton({ button }) {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);

  const handleCategoryClick = (e) => {
    dispatch(setSelectedFilter(e.target.value));
  };

  return (
    <label
      htmlFor={`${button.id}-button`}
      className={`flex justify-between items-center gap-1 px-2 py-1 text-tabs-text 
      ${selectedFilter === button.id && "text-white"}
      ${selectedFilter === button.id ? button.bg : "bg-tabs-bg"}
      hover:text-black rounded-lg duration-short cursor-pointer select-none`}
    >
      <Icon name={button.icon} />
      <input
        type="radio"
        id={`${button.id}-button`}
        name={"filter-button"}
        value={button.value}
        className="hidden"
        checked={selectedFilter === button.id}
        onChange={handleCategoryClick}
      />
      {button.value.charAt(0).toUpperCase() + button.value.slice(1)}
      {/* <span>{getTodosCount(button.id)}</span> */}
    </label>
  );
}

export default TodoCategoryButton;
