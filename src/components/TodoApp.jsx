import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTodosFromLocalStorage } from "../features/todo/todoSlice";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
import TodoCategoryButtons from "./TodoFilterButtons";
import getFromLocalStorage from "../utils/getFromLocalStorage";
import appConfig from "../config/appConfig";

function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = getFromLocalStorage(appConfig.LOCAL_STORAGE_KEY)?.list;

    if (savedTodos) {
      dispatch(setTodosFromLocalStorage(savedTodos));
    }
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-col">
      <TodoInputForm />
      <TodoCategoryButtons />
      <TodoList />
    </section>
  );
}

export default TodoApp;
