import { LOCAL_STORAGE_KEY } from "./InputForm";
import personalIcon from "../../public/personal.svg";
import workIcon from "../../public/work.svg";
import studyIcon from "../../public/study.svg";
import otherIcon from "../../public/other.svg";
import React, { useState } from "react";

/* eslint-disable react/prop-types */
export const ALL = "all",
  PERSONAL = "personal",
  WORK = "work",
  STUDY = "study",
  OTHER = "other";

const iconSize = 15;

function CategorySelection(props) {
  const { setSelectedCategory, handleLeftTodos } = props;
  const [selectedButton, setSelectedButton] = useState("all");

  const list = localStorage.getItem(LOCAL_STORAGE_KEY) || "[]";

  const allTodos = JSON.parse(list);

  const allCheckedTodos = allTodos.filter((todo) => todo.isChecked === true);
  const uncheckedTodos = allTodos.length - allCheckedTodos.length;

  const personalTodos = allTodos.filter((todo) => todo.category === PERSONAL);
  const checkedPersonalTodos = allTodos.filter(
    (todo) => todo.category === PERSONAL && todo.isChecked
  );
  const leftPersonal = personalTodos.length - checkedPersonalTodos.length;

  const workTodos = allTodos.filter((todo) => todo.category === WORK);
  const checkedWorkTodos = allTodos.filter(
    (todo) => todo.category === "work" && todo.isChecked
  );
  const leftWork = workTodos.length - checkedWorkTodos.length;

  const studyTodos = allTodos.filter((todo) => todo.category === STUDY);
  const checkedStudyTodos = allTodos.filter(
    (todo) => todo.category === STUDY && todo.isChecked
  );
  const leftStudy = studyTodos.length - checkedStudyTodos.length;

  const otherTodos = allTodos.filter((todo) => todo.category === OTHER);
  const checkedOtherTodos = allTodos.filter(
    (todo) => todo.category === OTHER && todo.isChecked
  );
  const leftOther = otherTodos.length - checkedOtherTodos.length;

  const calcLeftTodos = (type) => {
    switch (type) {
      case ALL:
        return uncheckedTodos;
      case PERSONAL:
        return leftPersonal;
      case WORK:
        return leftWork;
      case STUDY:
        return leftStudy;
      case OTHER:
        return leftOther;
      default:
        return 0;
    }
  };

  const clickHandler = (category) => {
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

  const handleRadioChange = (category) => {
    // setSelectedButton(id);
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
    // handleLeftTodos(calcLeftTodos(category));
  };

  const categoryButtons = [
    { id: "all", name: "category", value: "All", bg: "bg-all-color" },
    {
      id: "personal",
      name: "category",
      value: "Personal",
      bg: "bg-personal-color",
    },
    { id: "work", name: "category", value: "Work", bg: "bg-work-color" },
    { id: "study", name: "category", value: "Study", bg: "bg-study-color" },
    { id: "other", name: "category", value: "Other", bg: "bg-other-color" },
  ];

  return (
    <>
      {/* all button */}
      {/* <section className="flex gap-4 py-2">
        <button
          type="button"
          onClick={() => clickHandler(ALL)}
          className="appearance-none flex justify-between items-center gap-2 w-fit h-fit py-1 px-2 text-tabs-text bg-tabs-bg rounded-lg hover:border-none focus:outline-none focus:text-white focus:bg-all-color"
        >
          All
          <span className="block">
            {allCheckedTodos.length}/{allTodos.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => clickHandler(PERSONAL)}
          className="flex justify-between items-center gap-1 w-fit h-fit py-1 px-2 text-tabs-text bg-tabs-bg rounded-lg hover:border-none focus:outline-none focus:text-white focus:bg-personal-color"
        >
          <img
            src={personalIcon}
            alt="personal-icon"
            width={iconSize}
            className="fill-red-500"
          />
          Personal
          <span className="inline-block">
            {checkedPersonalTodos.length}/{personalTodos.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => clickHandler(WORK)}
          className="flex justify-between items-center gap-2 w-fit h-fit py-1 px-2 text-tabs-text bg-tabs-bg rounded-lg hover:border-none focus:outline-none focus:text-white focus:bg-work-color focus"
        >
          <img src={workIcon} alt="work-icon" width={iconSize} />
          Work
          <span className="block">
            {checkedWorkTodos.length}/{workTodos.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => clickHandler(STUDY)}
          className="flex justify-between items-center gap-2 w-fit h-fit py-1 px-2 text-tabs-text bg-tabs-bg rounded-lg hover:border-none focus:outline-none focus:text-white focus:bg-study-color"
        >
          <img src={studyIcon} alt="study-icon" width={iconSize} />
          Study
          <span className="block">
            {checkedStudyTodos.length}/{studyTodos.length}
          </span>
        </button>
        <button
          type="button"
          onClick={() => clickHandler(OTHER)}
          className="flex justify-between items-center gap-2 w-fit h-fit py-1 px-2 text-tabs-text bg-tabs-bg rounded-lg hover:border-none focus:outline-none focus:text-white focus:bg-other-color"
        >
          <img src={otherIcon} alt="other-icon" width={iconSize} />
          Other
          <span className="block">
            {checkedOtherTodos.length}/{otherTodos.length}
          </span>
        </button>
      </section> */}
      <section className="flex justify-between gap-2 p-1 mb-2">
        {categoryButtons.map((button, i) => (
          <React.Fragment key={i}>
            <label
              htmlFor={button.id}
              className={`flex justify-between items-center px-2 py-1 text-tabs-text ${
                selectedButton === button.id ? "text-white" : ""
              } ${
                selectedButton === button.id ? button.bg : "bg-tabs-bg"
              } rounded-lg cursor-pointer`}
            >
              {button.id !== "all" && (
                <img
                  src={
                    button.id === "personal"
                      ? personalIcon
                      : button.id === "work"
                      ? workIcon
                      : button.id === "study"
                      ? studyIcon
                      : button.id === "other"
                      ? otherIcon
                      : ""
                  }
                  alt="icon"
                  width={iconSize}
                  className={`me-1 ${
                    selectedButton === button.id && "fill-red"
                  }`}
                />
              )}
              <input
                type="radio"
                id={button.id}
                name={button.name}
                value={button.value}
                className="appearance-none"
                onChange={() => handleRadioChange(button.id)}
                onClick={() => clickHandler(button.id)}
              />
              {button.value}
              <span>
                {button.id === "all"
                  ? `${allCheckedTodos.length}/${allTodos.length}`
                  : button.id === "personal"
                  ? `${checkedPersonalTodos.length}/${personalTodos.length}`
                  : button.id === "work"
                  ? `${checkedWorkTodos.length}/${workTodos.length}`
                  : button.id === "study"
                  ? `${checkedStudyTodos.length}/${studyTodos.length}`
                  : `${checkedOtherTodos.length}/${otherTodos.length}`}
              </span>
            </label>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}

export default CategorySelection;
