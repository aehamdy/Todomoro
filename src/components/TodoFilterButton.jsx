/* eslint-disable react/prop-types */
import Icon from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilter } from "../features/todo/todoSlice";
import { categoryTypes } from "../constants";

function TodoFilterButton({ button }) {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);
  const allTodos = useSelector((state) => state.todos.list) || [];
  const { allChecked, allList, checkedCount, uncheckedCount } = getTodosCount();

  const handleCategoryClick = () => {
    dispatch(setSelectedFilter(button.value));
  };

  function getTodosCount() {
    const allTodosList = allTodos.length;
    const allCheckedList = allTodos.filter((todo) => todo.isChecked);

    const uncheckedFilteredlist = allTodos.filter(
      (todo) => todo.category === button.value
    );

    const checkedFilteredList = allTodos.filter(
      (todo) => todo.isChecked && todo.category === button.value
    );

    return {
      allList: allTodosList,
      allChecked: allCheckedList.length,
      uncheckedCount: uncheckedFilteredlist.length,
      checkedCount: checkedFilteredList.length,
    };
  }

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
        checked={selectedFilter === button.value}
        onChange={handleCategoryClick}
      />
      {button.value.charAt(0).toUpperCase() + button.value.slice(1)}

      <span>
        {button.value === categoryTypes.ALL
          ? `${allChecked}/${allList}`
          : `${checkedCount}/${uncheckedCount}`}
      </span>
    </label>
  );
}

export default TodoFilterButton;
