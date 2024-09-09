/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { LOCAL_STORAGE_KEY } from "./TodoApp";

export const ALL = "all",
  PERSONAL = "personal",
  WORK = "work",
  STUDY = "study",
  OTHER = "other";

const iconSize = 15;
const iconColor = "black";

const allIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    className="bi bi-list-ul"
    viewBox="0 0 16 16"
  >
    <path
      stroke={iconColor}
      fillRule="evenodd"
      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </svg>
);

const personalIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={iconColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.2 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM3 22a9.71 9.71 0 0 1 9-7c4.12 0 7.63 2.91 9 7"
    />
  </svg>
);

const workIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} viewBox="0 -1 32 32">
    <path
      fill={iconColor}
      fillRule="evenodd"
      d="M30 13H2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v5Zm-16 3c0-.366.105-.704.277-1h3.446c.172.296.277.634.277 1a2 2 0 0 1-4 0Zm16 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V15h10.142A3.926 3.926 0 0 0 12 16a4 4 0 0 0 8 0c0-.348-.058-.679-.142-1H30v11ZM12 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8V3Zm16 1h-6V2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z"
    />
  </svg>
);

const studyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={iconSize}
    viewBox="0 0 335.08 335.079"
  >
    <path
      fill={iconColor}
      d="M311.175 115.775c-1.355-10.186-1.546-27.73 7.915-33.621.169-.108.295-.264.443-.398 7.735-2.474 13.088-5.946 8.886-10.618l-114.102-34.38L29.56 62.445S8.403 65.469 10.293 98.339c1.026 17.89 6.637 26.676 11.544 31l-15.161 4.569c-4.208 4.672 1.144 8.145 8.88 10.615.147.138.271.293.443.401 9.455 5.896 9.273 23.438 7.913 33.626-33.967 9.645-21.774 12.788-21.774 12.788l7.451 1.803c-5.241 4.736-10.446 13.717-9.471 30.75 1.891 32.864 19.269 35.132 19.269 35.132l120.904 39.298 182.49-44.202s12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712 7.921-33.623.174-.105.301-.264.442-.396 7.736-2.474 13.084-5.943 8.881-10.615l-7.932-2.395c5.29-3.19 13.236-11.527 14.481-33.183.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794c.001.006 12.198-3.142-21.773-12.788zm-152.642-.421 30.688-6.307 103.708-21.312 15.451-3.178c-4.937 9.036-4.73 21.402-3.913 29.35.179 1.798.385 3.44.585 4.688L288.14 122.8l-130.897 32.563 1.29-40.009zM26.71 147.337l15.449 3.178 99.597 20.474 8.701 1.782 26.093 5.363 1.287 40.01-134.534-33.471-13.263-3.296c.195-1.25.401-2.89.588-4.693.812-7.942 1.023-20.311-3.918-29.347zm-6.002-50.58c-.187-8.743 1.371-15.066 4.52-18.28 2.004-2.052 4.369-2.479 5.991-2.479.857 0 1.474.119 1.516.119l79.607 25.953 39.717 12.949-1.303 40.289L39.334 124.07l-5.88-1.647a3.56 3.56 0 0 0-.735-.113c-.459-.033-11.475-1.047-12.011-25.553zm119.871 184.109L23.28 247.98a3.489 3.489 0 0 0-.733-.116c-.467-.031-11.488-1.044-12.021-25.544-.19-8.754 1.376-15.071 4.519-18.288 2.009-2.052 4.375-2.479 5.994-2.479.859 0 1.474.115 1.519.115 0 0 .005 0 0 0l119.316 38.908-1.295 40.29zm153.705-41.407c.185 1.804.391 3.443.591 4.693l-147.812 36.771 1.292-40.01 31.601-6.497 4.667 1.129 17.492-5.685 80.631-16.569 15.457-3.18c-4.942 9.035-4.737 21.406-3.919 29.348zm8.142-54.375a2.84 2.84 0 0 0-.791.122l-11.148 3.121-106.148 29.764-1.298-40.289 34.826-11.359 84.327-27.501c.011-.005 4.436-.988 7.684 2.315 3.144 3.214 4.704 9.537 4.52 18.28-.55 24.498-11.571 25.516-11.972 25.547z"
    />
  </svg>
);

const otherIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={iconSize}
    fill={iconColor}
    version="1.1"
    viewBox="0 0 512 512"
  >
    <path
      d="M383.026 301.209c-15.786 55.296-66.665 95.798-127.036 95.798-60.361 0-111.241-40.502-127.017-95.798H0v158.56h512v-158.56H383.026zM33.028 250.419h445.934v22.306H33.028z"
      className="st0"
    />
    <path
      d="M352.152 299.97H159.857a99.123 99.123 0 0 0 11.4 22.297h169.447a97.254 97.254 0 0 0 11.448-22.297zM313.36 349.522H198.599c16.554 11.242 36.421 17.743 57.381 17.743s40.828-6.501 57.38-17.743zM33.028 200.877h445.934v22.298H33.028zM33.028 151.335h445.934v22.287H33.028zM33.028 101.783h445.934v22.287H33.028zM33.028 52.231h445.934v22.298H33.028z"
      className="st0"
    />
  </svg>
);

function TodoCategorySelection(props) {
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

  // const clickHandler = (category) => {
  //   switch (category) {
  //     case ALL:
  //       setSelectedButton(ALL);
  //       break;
  //     case PERSONAL:
  //       setSelectedButton(PERSONAL);
  //       break;
  //     case WORK:
  //       setSelectedButton(WORK);
  //       break;
  //     case STUDY:
  //       setSelectedButton(STUDY);
  //       break;
  //     case OTHER:
  //       setSelectedButton(OTHER);
  //       break;
  //     default:
  //       setSelectedButton(ALL);
  //   }

  //   handleLeftTodos(calcLeftTodos(category));
  // };

  const handleRadioChange = (category) => {
    switch (category) {
      case ALL:
        setSelectedCategory(ALL);
        break;
      case PERSONAL:
        setSelectedCategory(PERSONAL);
        break;
      case WORK:
        setSelectedCategory(WORK);
        break;
      case STUDY:
        setSelectedCategory(STUDY);
        break;
      case OTHER:
        setSelectedCategory(OTHER);
        break;
      default:
        setSelectedCategory(ALL);
    }

    switch (category) {
      case ALL:
        setSelectedButton(ALL);
        break;
      case PERSONAL:
        setSelectedButton(PERSONAL);
        break;
      case WORK:
        setSelectedButton(WORK);
        break;
      case STUDY:
        setSelectedButton(STUDY);
        break;
      case OTHER:
        setSelectedButton(OTHER);
        break;
      default:
        setSelectedButton(ALL);
    }

    handleLeftTodos(calcLeftTodos(category));
  };

  const categoryButtons = [
    {
      id: "all",
      name: "category",
      value: "All",
      bg: "bg-all-color",
      icon: allIcon,
    },
    {
      id: "personal",
      name: "category",
      value: "Personal",
      bg: "bg-personal-color",
      icon: personalIcon,
    },
    {
      id: "work",
      name: "category",
      value: "Work",
      bg: "bg-work-color",
      icon: workIcon,
    },
    {
      id: "study",
      name: "category",
      value: "Study",
      bg: "bg-study-color",
      icon: studyIcon,
    },
    {
      id: "other",
      name: "category",
      value: "Other",
      bg: "bg-other-color",
      icon: otherIcon,
    },
  ];

  const handleRemainTodos = (category) => {
    return getTodosCount(category);
  };

  return (
    <>
      <section className="flex justify-between gap-2 p-1 mb-2">
        {categoryButtons.map((button, i) => (
          <React.Fragment key={i}>
            <label
              htmlFor={button.id}
              className={`flex justify-between gap-1 items-center px-2 py-1 text-tabs-text ${
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
                // onClick={() => clickHandler(button.id)}
              />
              {button.value}
              <span>{handleRemainTodos(button.id)}</span>
            </label>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default TodoCategorySelection;
