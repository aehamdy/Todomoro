import { useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "./InputForm";

/* eslint-disable react/prop-types */
export const ALL = "all",
  PERSONAL = "personal",
  WORK = "work",
  STUDY = "study",
  OTHER = "other";

function CategorySelection(props) {
  const { setSelectedCategory, todos } = props;

  //   const todosLength = (categoryType, phrase) => {
  //     const length = todos.filter((todo) => todo[categoryType] === phrase).length;
  //     return length;
  //   };

  const allTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const allCheckedTodos = allTodos.filter((todo) => todo.isChecked === true);
  //   const uncheckedTodos = allTodos - allCheckedTodos;

  const personalTodos = allTodos.filter((todo) => todo.category === PERSONAL);
  const checkedPersonalTodos = allTodos.filter(
    (todo) => todo.category === PERSONAL && todo.isChecked
  );

  const workTodos = allTodos.filter((todo) => todo.category === WORK);
  const checkedWorkTodos = allTodos.filter(
    (todo) => todo.category === "work" && todo.isChecked
  );

  const studyTodos = allTodos.filter((todo) => todo.category === STUDY);
  const checkedStudyTodos = allTodos.filter(
    (todo) => todo.category === STUDY && todo.isChecked
  );

  const otherTodos = allTodos.filter((todo) => todo.category === OTHER);
  const checkedOtherTodos = allTodos.filter(
    (todo) => todo.category === OTHER && todo.isChecked
  );

  const clickHandler = (category) => {
    switch (category) {
      case ALL:
        setSelectedCategory(ALL);
        break;
      case PERSONAL:
        setSelectedCategory(PERSONAL);
        break;
      case "work":
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
  };

  useEffect(() => {}, [todos]);

  return (
    <section>
      <button type="button" onClick={() => clickHandler(ALL)}>
        All
        <span className="block">
          {allCheckedTodos.length}/{allTodos.length}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(PERSONAL)}>
        Personal
        <span className="block">
          {checkedPersonalTodos.length}/{personalTodos.length}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(WORK)}>
        Work
        <span className="block">
          {checkedWorkTodos.length}/{workTodos.length}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(STUDY)}>
        Study
        <span className="block">
          {checkedStudyTodos.length}/{studyTodos.length}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(OTHER)}>
        Other
        <span className="block">
          {checkedOtherTodos.length}/{otherTodos.length}
        </span>
      </button>
    </section>
  );
}

export default CategorySelection;
