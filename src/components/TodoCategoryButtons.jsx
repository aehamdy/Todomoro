/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "./TodoApp";
import { categoryOptions, ALL, iconSize } from "../constants";

const allIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M3 7h18M3 12h18M3 17h18"
    />
  </svg>
);

const categoryButtons = [
  {
    id: ALL,
    value: ALL,
    bg: "bg-all-color",
    icon: allIcon,
  },
  ...categoryOptions,
];

function TodoCategoryButtons({
  allTodos,
  setAllTodos,
  setSelectedCategory,
  handleLeftTodos,
}) {
  const [selectedButton, setSelectedButton] = useState(ALL);
  // const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";
    setAllTodos(JSON.parse(list));
  }, []);

  const getTodosCount = (category) => {
    if (category === ALL) {
      const totalTodos = allTodos.length;
      const checkedTodos = allTodos.filter((todo) => todo.isChecked).length;
      return `${checkedTodos}/${totalTodos}`;
    } else {
      const categoryTodos = allTodos.filter(
        (todo) => todo.category === category
      );
      const totalTodos = categoryTodos.length;
      const checkedTodos = categoryTodos.filter(
        (todo) => todo.isChecked
      ).length;
      return `${checkedTodos}/${totalTodos}`;
    }
  };

  const getUncheckedTodos = (category) => {
    if (category === ALL) {
      return allTodos.length - allTodos.filter((todo) => todo.isChecked).length;
    } else {
      const categoryTodos = allTodos.filter(
        (todo) => todo.category === category
      );
      return (
        categoryTodos.length -
        categoryTodos.filter((todo) => todo.isChecked).length
      );
    }
  };

  const handleRadioChange = (id) => {
    setSelectedCategory(id);
    setSelectedButton(id);

    handleLeftTodos(getUncheckedTodos(id));
    getTodosCount(id);

    // setSelectedCategory(id);
    // setSelectedButton(id);
    // handleLeftTodos(getUncheckedTodos(id));
  };

  return (
    <section className="categories-scrollbar flex justify-between gap-1 p-1 mb-2 overflow-x-auto">
      {categoryButtons.map((button, i) => (
        <label
          key={i}
          htmlFor={button.id + "-button"}
          className={`flex justify-between items-center gap-1 px-2 py-1 text-tabs-text ${
            selectedButton === button.id ? "text-white" : ""
          } ${
            selectedButton === button.id ? button.bg : "bg-tabs-bg"
          } rounded-lg cursor-pointer select-none`}
        >
          <span>{button.icon}</span>
          <input
            type="radio"
            id={button.id + "-button"}
            name={"category-button"}
            value={button.value}
            className="hidden"
            checked={selectedButton === button.id}
            onChange={() => handleRadioChange(button.id)}
          />
          {button.value.charAt(0).toUpperCase() + button.value.slice(1)}
          <span>{getTodosCount(button.id)}</span>
        </label>
      ))}
    </section>
  );
}

export default TodoCategoryButtons;
