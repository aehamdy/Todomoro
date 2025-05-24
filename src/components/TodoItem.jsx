/* eslint-disable react/prop-types */
import TodoItemDeleteButton from "./TodoItemDeleteButton";
import TodoItemContent from "./TodoItemContent";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";
import Icon from "./Icon";
import TodoItemEditButton from "./TodoItemEditButton";
import TodoItemFullTime from "./TodoItemFullTime";
import { categoryTypes } from "../constants";
import { useState } from "react";
import TodoItemEditActions from "./TodoItemEditActions";

const editInitialState = { edit: false, editValue: "" };

function TodoItem({ todo }) {
  const [todoEditState, setTodoEditState] = useState(editInitialState);
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEditChange = (e) => {
    setTodoEditState((prev) => ({ ...prev, editValue: e.target.value }));
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
      className="flex justify-between mb-2 last:mb-0 text-black bg-todo-bg hover:bg-todo-bg-hover hover:shadow-md rounded-lg transition-all duration-300"
      style={{
        backgroundColor: getCheckedBgColor(),
      }}
    >
      <label
        htmlFor={`todo-${todo.id}`}
        className="flex justify-between items-center flex-1 py-2 ps-3 cursor-pointer"
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
          <div className="flex items-center gap-2 md:gap-4">
            <Icon
              name={`${todo.isChecked ? "checkedCircle" : "emptyCircle"}`}
              className={`${
                todo.isChecked ? "text-gray-600" : "text-gray-400"
              }`}
            />

            <div className="flex items-center gap-1">
              <Icon
                name={todo.category}
                className={`${
                  todo.isChecked ? "text-stone-400" : "text-stone-800"
                }
                }`}
              />
              <div className="flex flex-col items-start">
                {todoEditState.edit ? (
                  <input
                    type="text"
                    name="edit-todo"
                    id="edit"
                    value={todoEditState.editValue}
                    onChange={handleEditChange}
                    className="ps-1 bg-gray-300 rounded-sm"
                  />
                ) : (
                  <TodoItemContent todo={todo} />
                )}

                <div className="flex items-center gap-2">
                  <TodoItemFullTime
                    isTodoChecked={todo.isChecked}
                    timing={todo.timing}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex"></div>
        </div>
      </label>

      <div className="flex ps-1 pe-3 border-s">
        {todoEditState.edit ? (
          <TodoItemEditActions />
        ) : (
          <div className="flex gap-1">
            <TodoItemEditButton
              todo={todo}
              setTodoEditState={setTodoEditState}
            />
            <TodoItemDeleteButton todoId={todo.id} />
          </div>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
