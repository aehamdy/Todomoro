import { useState } from "react";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoCategoryButtons from "./TodoCategoryButtons";
import TodoFlags from "./TodoFlags";

export const LOCAL_STORAGE_KEY = "TodomoroTasks";

function TodoApp() {
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [leftTodos, setLeftTodos] = useState();

  const handleLeftTodos = (todoRemain) => {
    setLeftTodos(todoRemain);
  };

  const save = (items) => {
    const list = JSON.stringify(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, list);
    setAllTodos(items);
  };

  return (
    <section className="flex flex-col-reverse md:flex-col">
      <TodoInputForm
        todos={todos}
        setTodos={setTodos}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        save={save}
        setLeftTodos={setLeftTodos}
        leftTodos={leftTodos}
      />
      <TodoCategoryButtons
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        setSelectedCategory={setSelectedCategory}
        handleLeftTodos={handleLeftTodos}
      />
      <TodoFlags
        leftTodos={leftTodos}
        save={save}
        setTodos={setTodos}
        todos={todos}
        allTodos={allTodos}
        handleLeftTodos={handleLeftTodos}
        selectedCategory={selectedCategory}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        save={save}
        setLeftTodos={setLeftTodos}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        leftTodos={leftTodos}
        handleLeftTodos={handleLeftTodos}
      />
    </section>
  );
}

export default TodoApp;
