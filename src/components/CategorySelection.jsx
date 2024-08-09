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

  const allTodos = todos.length;
  const allCheckedTodos = todos.filter(
    (todo) => todo.isChecked === true
  ).length;
  const personalTodos = todos.filter(
    (todo) => todo.category === PERSONAL
  ).length;
  const checkedPersonalTodos = todos.filter(
    (todo) => todo.category === PERSONAL && todo.isChecked
  ).length;
  const workTodos = todos.filter((todo) => todo.category === WORK).length;
  const checkedWorkTodos = todos.filter(
    (todo) => todo.category === "work" && todo.isChecked
  ).length;
  const studyTodos = todos.filter((todo) => todo.category === STUDY).length;
  const checkedStudyTodos = todos.filter(
    (todo) => todo.category === STUDY && todo.isChecked
  ).length;
  const otherTodos = todos.filter((todo) => todo.category === OTHER).length;
  const checkedOtherTodos = todos.filter(
    (todo) => todo.category === OTHER && todo.isChecked
  ).length;

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

  return (
    <section>
      <button type="button" onClick={() => clickHandler(ALL)}>
        All
        <span className="block">
          {allCheckedTodos}/{allTodos}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(PERSONAL)}>
        Personal
        <span className="block">
          {checkedPersonalTodos}/{personalTodos}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(WORK)}>
        Work
        <span className="block">
          {checkedWorkTodos}/{workTodos}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(STUDY)}>
        Study
        <span className="block">
          {checkedStudyTodos}/{studyTodos}
        </span>
      </button>
      <button type="button" onClick={() => clickHandler(OTHER)}>
        Other
        <span className="block">
          {checkedOtherTodos}/{otherTodos}
        </span>
      </button>
    </section>
  );
}

export default CategorySelection;
