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
  reducers: {},
});

export default todoSlice.reducer;
