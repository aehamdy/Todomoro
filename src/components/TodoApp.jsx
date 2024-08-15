import { useState } from "react";
import InputForm from "./InputForm";
import List from "./List";
import CategorySelection from "./CategorySelection";
import LeftTodos from "./LeftTodos";
import ClearButton from "./ClearButton";

export const LOCAL_STORAGE_KEY = "TodomoroTasks";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [leftTodos, setLeftTodos] = useState();

  const handleLeftTodos = (todoRemain) => {
    setLeftTodos(todoRemain);
  };

  const save = (items) => {
    const list = JSON.stringify(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, list);
  };

  return (
    <section>
      <InputForm todos={todos} setTodos={setTodos} save={save} />
      <CategorySelection
        setSelectedCategory={setSelectedCategory}
        handleLeftTodos={handleLeftTodos}
      />
      <section>
        <LeftTodos leftTodos={leftTodos} />
        <ClearButton
          save={save}
          setTodos={setTodos}
          todos={todos}
          handleLeftTodos={handleLeftTodos}
          leftTodos={leftTodos}
        />
      </section>
      <List
        todos={todos}
        setTodos={setTodos}
        save={save}
        setLeftTodos={setLeftTodos}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        leftTodos={leftTodos}
      />
    </section>
  );
}

export default TodoApp;
