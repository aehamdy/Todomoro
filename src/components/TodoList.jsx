/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "./TodoApp";
import TodoEmptyList from "./TodoEmptyList";
import TodoIcon from "./TodoIcon";

const categoryIconSize = 20;

const personalIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={categoryIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      // stroke="#292D32"
      stroke="rgb(203, 161, 201)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
    />
  </svg>
);
const workIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={categoryIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      // stroke="#292D32"
      stroke="rgb(242, 160, 172)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6"
    />
    <path
      // stroke="#292D32"
      stroke="rgb(242, 160, 172)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
    />
  </svg>
);
const studyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={categoryIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      // stroke="#292D32"
      stroke="rgb(0, 174, 161)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
    />
    <path
      // stroke="#292D32"
      stroke="rgb(0, 174, 161)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
    />
  </svg>
);
const otherIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={categoryIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      // stroke="#292D32"
      stroke="rgb(227, 126, 98)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12ZM19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6v6"
    />
    <path
      // stroke="#292D32"
      stroke="rgb(227, 126, 98)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.55 9.23h3.33M9.72 6.23h5"
    />
  </svg>
);

function TodoList(props) {
  const {
    todos,
    setTodos,
    allTodos,
    setAllTodos,
    save,
    setLeftTodos,
    selectedCategory,
  } = props;
  const [editTaskId, setEditTaskId] = useState(null);
  const [newValue, setNewValue] = useState("");

  const handleDeletion = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const items =
      localStorage.getItem(LOCAL_STORAGE_KEY) &&
      localStorage.getItem(LOCAL_STORAGE_KEY);
    const allTodos = JSON.parse(items);
    const updatedList = allTodos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
    save(updatedList);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setEditTaskId(id);
    const currentTask = todos.find((todo) => todo.id === id);
    setNewValue(currentTask.value);
  };

  const handleEditChange = (e) => {
    e.stopPropagation();
    setNewValue(e.target.value);
  };

  const handleEditSave = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, value: newValue } : todo
    );
    setTodos(updatedTodos);
    save(updatedTodos);
    setEditTaskId(null);
  };

  const handleTaskCheck = (id) => {
    const updatedAllTodos = allTodos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );

    setAllTodos(updatedAllTodos);
    save(updatedAllTodos);

    filterTodos(selectedCategory);

    const notCheckedTodos = updatedAllTodos.filter((todo) => !todo.isChecked);
    setLeftTodos(notCheckedTodos.length);
  };

  const load = () => {
    const listItems = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (listItems) {
      setTodos(JSON.parse(listItems));
    } else {
      setTodos([]);
    }
  };

  const filterTodos = (category) => {
    let filteredTodos;

    if (category === "all") {
      filteredTodos = allTodos;
    } else {
      filteredTodos = allTodos.filter((item) => item.category === category);
    }

    setTodos(filteredTodos);
  };

  useEffect(() => {
    load();
  }, []);

  const handleIcon = (category) => {
    if (category === "personal") {
      return personalIcon;
    } else if (category === "work") {
      return workIcon;
    } else if (category === "study") {
      return studyIcon;
    } else if (category === "other") {
      return otherIcon;
    }
  };

  useEffect(() => {
    const listItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (listItems) {
      const parsedTodos = JSON.parse(listItems);
      setAllTodos(parsedTodos);
      filterTodos(selectedCategory);
    }
  }, []);

  useEffect(() => {
    filterTodos(selectedCategory);
  }, [selectedCategory, allTodos]);

  return (
    <>
      <ul className="list-scrollbar relative border border-white rounded-lg h-[370px] overflow-y-auto overflow-x-hidden py-2 px-4">
        {todos.length < 1 ? (
          <TodoEmptyList />
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleTaskCheck(todo.id)}
              className="flex justify-between items-center hover:shadow-md hover:bg-todo-bg-hover duration-short rounded-lg text-xl text-black bg-todo-bg py-2 px-3 mb-2 last:mb-0 cursor-pointer"
              style={{
                textDecoration: todo.isChecked ? "line-through" : "none",
                color: todo.isChecked && "#928e85",
                backgroundColor:
                  todo.isChecked && todo.category === "personal"
                    ? "rgb(203, 161, 201, .3)"
                    : todo.isChecked && todo.category === "work"
                    ? "rgb(242, 160, 172, .4)"
                    : todo.isChecked && todo.category === "study"
                    ? "rgb(0, 174, 161, .3)"
                    : todo.isChecked && todo.category === "other"
                    ? "rgb(227, 126, 98, .5)"
                    : "",
              }}
            >
              <div className="flex justify-between items-center gap 4">
                <span className="me-2">
                  {!todo.isChecked ? (
                    <TodoIcon icon="dashIcon" />
                  ) : (
                    <TodoIcon icon="tickedCircleIcon" />
                  )}
                </span>
                {editTaskId === todo.id ? (
                  <input
                    type="text"
                    className="bg-slate-200 rounded-md ps-2"
                    value={newValue}
                    onChange={handleEditChange}
                    // onClick={(e) => handleTaskCheck(e, todo.id)}
                    onBlur={(e) => handleEditSave(e, todo.id)}
                  />
                ) : (
                  <div className="flex">
                    <span className="flex items-center me-2">
                      {handleIcon(todo.category)}
                    </span>
                    <p className="select-none">{todo.value}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                {!todo.isChecked && (
                  <span
                    className="cursor-pointer"
                    onClick={(e) => handleEdit(e, todo.id)}
                  >
                    <TodoIcon icon="editIcon" />
                  </span>
                )}
                <span
                  className="cursor-pointer"
                  onClick={(e) => handleDeletion(e, todo.id)}
                >
                  {!todo.isChecked ? (
                    <TodoIcon icon="trashbinIcon" />
                  ) : (
                    <TodoIcon icon="grayTrashBinIcon" />
                  )}
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default TodoList;
