import { createSlice } from "@reduxjs/toolkit";
import getDateAndTime from "../../utils/getDateAndTime";
import { categoryTypes } from "../../constants";

const initialState = {
  list: [
    {
      id: 1,
      content: "Task 1",
      category: "personal",
      timing: {
        createdAt: {
          date: `May 09`,
          time: "05:37",
        },
      },
      isChecked: true,
    },
    {
      id: 2,
      content: "Task 2",
      category: "work",
      timing: {
        createdAt: {
          date: `May 12`,
          time: "11:50",
        },
      },
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
        timing: {
          createdAt: {
            time: fullTime,
            date: fullDate,
          },
        },
      };

      state.list.unshift(todo);
    },

    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const { fullTime, fullDate } = getDateAndTime();

      state.list = state.list.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
            timing: {
              ...todo.timing,
              checkedAt: !todo.isChecked
                ? { time: fullTime, date: fullDate }
                : null,
            },
          };
        }
        return todo;
      });
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setSelectedCategory } =
  todoSlice.actions;

export default todoSlice.reducer;
