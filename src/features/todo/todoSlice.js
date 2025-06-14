import { createSlice } from "@reduxjs/toolkit";
import getDateAndTime from "../../utils/getDateAndTime";
import { categoryTypes } from "../../constants";
import { v4 as uuidv4 } from "uuid";

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
  selectedFilter: categoryTypes.ALL,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { fullDate, fullTime } = getDateAndTime();

      const todo = {
        id: uuidv4(),
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

    editTodo: (state, action) => {
      const { id, newContent } = action.payload;
      state.list = state.list.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo
      );
    },

    setTodosFromLocalStorage: (state, action) => {
      state.list = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },

    removeCompletedTodos: (state, action) => {
      const selectedFilter = action.payload;

      state.list = state.list.filter((todo) => {
        if (!todo.isChecked) return true;

        if (selectedFilter === "all") return false;

        return todo.category !== selectedFilter;
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  setTodosFromLocalStorage,
  setSelectedCategory,
  setSelectedFilter,
  removeCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
