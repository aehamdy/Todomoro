import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import appConfig from "../config/appConfig";
import addToLocalStorage from "../utils/addToLocalStorage";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  addToLocalStorage(appConfig.LOCAL_STORAGE_KEY, state.todos);
});

export default store;
