/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Circle from "../../public/circle.svg";
import TickedCircle from "../../public/circle-tick.svg";
import emptyList from "../../public/list-solid.svg";
import TrashBin from "../../public/trash-bin.svg";
import EditIcon from "../../public/edit.svg";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "./InputForm";
import CategorySelection from "./CategorySelection";
import LeftTodos from "./LeftTodos";
import personalIcon from "../../public/personal.svg";
import workIcon from "../../public/work.svg";
import studyIcon from "../../public/study.svg";
import otherIcon from "../../public/other.svg";

function List(props) {
  const { todos, setTodos, save } = props;
  const [editTaskId, setEditTaskId] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [leftTodos, setLeftTodos] = useState();
  const emptyListIcon = 60;

  const handleDeletion = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedList = todos.filter((todo) => todo.id !== id);
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

  const handleTaskChecking = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTaskCheck = (id) => {
    const items = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(items);
    save(items);
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
    const listItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    let filteredTodos;

    if (category === "all") {
      filteredTodos = listItems;
    } else {
      filteredTodos = listItems.filter((item) => item.category === category);
    }

    setTodos(filteredTodos);
  };

  const handleLeftTodos = (todoRemain) => {
    setLeftTodos(todoRemain);
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      filterTodos("all");
    } else if (selectedCategory === "personal") {
      filterTodos("personal");
    } else if (selectedCategory === "work") {
      filterTodos("work");
    } else if (selectedCategory === "study") {
      filterTodos("study");
    } else {
      filterTodos("other");
    }
  }, [selectedCategory]);

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

  return (
    <ul className="border border-black rounded-lg py-2 px-4">
      <CategorySelection
        setSelectedCategory={setSelectedCategory}
        todos={todos}
        handleLeftTodos={handleLeftTodos}
      />
      <LeftTodos handleLeftTodos={leftTodos} save={save} setTodos={setTodos} />
      {todos.length < 1 ? (
        <>
          <img
            src={emptyList}
            alt=""
            width={emptyListIcon}
            height={emptyListIcon}
          />
          <p>The list is empty, lets add tasks</p>
        </>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleTaskCheck(todo.id)}
            className="flex justify-between items-center border border-tabs-text rounded-lg text-xl text-black py-2 px-3 mb-2 last:mb-0 cursor-pointer"
            style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
          >
            <div className="flex justify-between items-center gap 4">
              <img
                className="me-2 fill-blue-500"
                src={!todo.isChecked ? Circle : TickedCircle}
                alt="taskCircle"
                width="17"
                height="17"
              />
              {editTaskId === todo.id ? (
                <input
                  type="text"
                  value={newValue}
                  onChange={handleEditChange}
                  onClick={handleTaskChecking}
                  onBlur={(e) => handleEditSave(e, todo.id)}
                />
              ) : (
                <div className="flex">
                  <img
                    src={handleIcon(todo.category)}
                    alt="icon"
                    width="18"
                    className="me-2"
                  />
                  <p>{todo.value}</p>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <span
                className="cursor-pointer"
                onClick={(e) => handleEdit(e, todo.id)}
              >
                <img src={EditIcon} alt="edit icon" width="22" />
              </span>
              <span
                className="cursor-pointer"
                onClick={(e) => handleDeletion(e, todo.id)}
              >
                <img
                  className="cursor-pointer"
                  src={TrashBin}
                  alt="trash icon"
                  width="20"
                />
              </span>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default List;
