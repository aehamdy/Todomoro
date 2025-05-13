import { createSlice } from "@reduxjs/toolkit";
import getDateAndTime from "../../utils/getDateAndTime";
import { categoryTypes } from "../../constants";

const initialState = {
  list: [
    {
      id: 1,
      content: "Task 1",
      category: "personal",
      date: `May 09`,
      time: "05:37",
      isChecked: true,
    },
    {
      id: 2,
      content: "Task 2",
      category: "work",
      date: `May 12`,
      time: "11:50",
      isChecked: false,
    },
  ],
  selectedCategory: categoryTypes.PERSONAL,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { fullDate, fullTime } = getDateAndTime();

      const todo = {
        id: state.list.length + 1,
        content: action.payload,
        category: state.selectedCategory,
        time: fullTime,
        date: fullDate,
      };

      state.list.unshift(todo);
    },

    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      );
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setSelectedCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
