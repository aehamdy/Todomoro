/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { LOCAL_STORAGE_KEY } from "./TodoApp";
import { categoryOptions } from "../constants";

export const ALL = "all",
  PERSONAL = "personal",
  WORK = "work",
  STUDY = "study",
  OTHER = "other";

const iconSize = 17;
const iconColor = "black";

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

function TodoCategoryButtons(props) {
  const { setSelectedCategory, handleLeftTodos } = props;

  const [selectedButton, setSelectedButton] = useState("all");

  const list = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";

  const allTodos = JSON.parse(list);

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
      const totalCheckedTodos = allTodos.filter((todo) => todo.isChecked);
      const allLeftTodos = allTodos.length - totalCheckedTodos.length;
      return allLeftTodos;
    } else {
      const categoryTodos = allTodos.filter(
        (todo) => todo.category === category
      );
      const checkedTodos = categoryTodos.filter((todo) => todo.isChecked);
      const leftTodos = categoryTodos.length - checkedTodos.length;
      return leftTodos;
    }
  };

  const calcLeftTodos = (type) => {
    switch (type) {
      case ALL:
        return getUncheckedTodos(type);
      case PERSONAL:
        return getUncheckedTodos(type);
      case WORK:
        return getUncheckedTodos(type);
      case STUDY:
        return getUncheckedTodos(type);
      case OTHER:
        return getUncheckedTodos(type);
      default:
        return 0;
    }
  };

  const handleRadioChange = (category) => {
    switch (category) {
      case ALL:
        setSelectedCategory(ALL);
        setSelectedButton(ALL);
        break;
      case PERSONAL:
        setSelectedCategory(PERSONAL);
        setSelectedButton(PERSONAL);
        break;
      case WORK:
        setSelectedCategory(WORK);
        setSelectedButton(WORK);
        break;
      case STUDY:
        setSelectedCategory(STUDY);
        setSelectedButton(STUDY);
        break;
      case OTHER:
        setSelectedCategory(OTHER);
        setSelectedButton(OTHER);
        break;
      default:
        setSelectedCategory(ALL);
        setSelectedButton(ALL);
    }

    handleLeftTodos(calcLeftTodos(category));
    handleRemainTodos(category);
  };

  const categoryButtons = [
    {
      id: "all",
      name: "category",
      value: "All",
      bg: "bg-all-color",
      icon: allIcon,
    },
    ...categoryOptions,
  ];

  const handleRemainTodos = (category) => {
    return getTodosCount(category);
  };

  return (
    <>
      <section className="categories-scrollbar flex justify-between gap-1 p-1 mb-2 overflow-x-auto">
        {categoryButtons.map((button, i) => (
          <React.Fragment key={i}>
            <label
              htmlFor={button.id}
              className={`flex justify-between items-center gap-1 px-2 py-1 text-tabs-text ${
                selectedButton === button.id ? "text-white" : ""
              } ${
                selectedButton === button.id ? button.bg : "bg-tabs-bg"
              } rounded-lg cursor-pointer select-none`}
            >
              <span>{button.icon}</span>
              <input
                type="radio"
                id={button.id}
                name={button.name}
                value={button.value}
                className="appearance-none"
                onChange={() => handleRadioChange(button.id)}
              />
              {button.value.charAt(0).toUpperCase() +
                button.value.slice(1).toLowerCase()}
              <span>{handleRemainTodos(button.id)}</span>
            </label>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default TodoCategoryButtons;
