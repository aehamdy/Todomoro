import { useState } from "react";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoCategoryButtons from "./TodoCategoryButtons";
import TodoFlags from "./TodoFlags";

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
      <TodoInputForm
        todos={todos}
        setTodos={setTodos}
        save={save}
        setLeftTodos={setLeftTodos}
        leftTodos={leftTodos}
      />
      <TodoCategoryButtons
        setSelectedCategory={setSelectedCategory}
        handleLeftTodos={handleLeftTodos}
      />
      <TodoFlags
        leftTodos={leftTodos}
        save={save}
        setTodos={setTodos}
        todos={todos}
        handleLeftTodos={handleLeftTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        save={save}
        setLeftTodos={setLeftTodos}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        leftTodos={leftTodos}
        handleLeftTodos={handleLeftTodos}
      />
    </section>
  );
}

export default TodoApp;
