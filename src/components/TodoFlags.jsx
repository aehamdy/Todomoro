/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ClearButton from "./ClearButton";
import LeftTodos from "./TodoLeftTodos";

function TodoFlags(props) {
  const {
    leftTodos,
    save,
    setTodos,
    todos,
    allTodos,
    handleLeftTodos,
    selectedCategory,
  } = props;

  useEffect(() => {
    let filteredTodos;
    if (selectedCategory === "all") {
      filteredTodos = allTodos;
    } else {
      filteredTodos = allTodos.filter(
        (todo) => todo.category === selectedCategory
      );
    }

    const notCheckedTodos = filteredTodos.filter((todo) => !todo.isChecked);
    handleLeftTodos(notCheckedTodos.length);
  }, [selectedCategory, allTodos, handleLeftTodos]);

  return (
    <section className="flex justify-between p-1">
      <LeftTodos leftTodos={leftTodos} selectedCategory={selectedCategory} />
      <ClearButton
        save={save}
        todos={todos}
        setTodos={setTodos}
        handleLeftTodos={handleLeftTodos}
      />
    </section>
  );
}

export default TodoFlags;
