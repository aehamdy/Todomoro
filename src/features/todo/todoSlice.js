import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      content: "Task 1",
    },
    {
      id: 2,
      content: "Task 2",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.list.length + 1,
        content: action.payload,
      };
      state.list.unshift(todo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
