/* eslint-disable react/prop-types */
import TodoItemDeleteButton from "./TodoItemDeleteButton";
import TodoItemContent from "./TodoItemContent";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";
import Icon from "./Icon";
import TodoItemEditButton from "./TodoItemEditButton";
import TodoItemFullTime from "./TodoItemFullTime";
import { categoryTypes } from "../constants";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(toggleTodo(todo.id));
  };

  const getCheckedBgColor = () => {
    if (!todo.isChecked) return "";

    switch (todo.category) {
      case categoryTypes.PERSONAL:
        return "rgba(203, 161, 201, 0.3)";
      case categoryTypes.WORK:
        return "rgba(242, 160, 172, 0.4)";
      case categoryTypes.STUDY:
        return "rgba(0, 174, 161, 0.3)";
      case categoryTypes.OTHER:
        return "rgba(227, 126, 98, 0.5)";
      default:
        return "";
    }
  };

  return (
    <li
      className="mb-2 last:mb-0 text-xl text-black bg-todo-bg hover:bg-todo-bg-hover hover:shadow-md rounded-lg transition-all duration-300"
      style={{
        color: todo.isChecked && "#928e85",
        backgroundColor: getCheckedBgColor(),
      }}
    >
      <label
        htmlFor={`todo-${todo.id}`}
        className="flex justify-between items-center py-2 px-3 cursor-pointer"
      >
        <div className="flex">
          <input
            type="checkbox"
            name={`todo-${todo.id}`}
            id={`todo-${todo.id}`}
            checked={!todo.isChecked}
            onChange={handleOnChange}
            className="appearance-none"
          />
          <div className="flex items-center gap-4">
            <Icon
              name={`${todo.isChecked ? "checkedCircle" : "emptyCircle"}`}
              className={`${todo.isChecked && "text-gray-300"}`}
            />
            <div>
              <TodoItemContent todo={todo} />
              <div className="flex items-center gap-3">
                <TodoItemFullTime todo={todo} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex"></div>
        </div>

        <div className="flex gap-3">
          <TodoItemEditButton todo={todo} />
          <TodoItemDeleteButton todoId={todo.id} />
        </div>
      </label>
    </li>
  );
}

export default TodoItem;
