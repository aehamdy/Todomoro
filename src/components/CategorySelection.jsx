/* eslint-disable react/prop-types */
function CategorySelection(props) {
  const { setSelectedCategory } = props;

  const clickHandler = (category) => {
    switch (category) {
      case "all":
        setSelectedCategory("all");
        break;
      case "personal":
        setSelectedCategory("personal");
        break;
      case "work":
        setSelectedCategory("work");
        break;
      case "study":
        setSelectedCategory("study");
        break;
      case "other":
        setSelectedCategory("other");
        break;
      default:
        setSelectedCategory("all");
    }
  };

  return (
    <section>
      <button type="button" onClick={() => clickHandler("all")}>
        All
      </button>
      <button type="button" onClick={() => clickHandler("personal")}>
        Personal
      </button>
      <button type="button" onClick={() => clickHandler("work")}>
        Work
      </button>
      <button type="button" onClick={() => clickHandler("study")}>
        Study
      </button>
      <button type="button" onClick={() => clickHandler("other")}>
        Other
      </button>
    </section>
  );
}

export default CategorySelection;
