/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import TodoCategoryOptions from "./TodoCategoryOptions";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoInputForm() {
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleOnAddClick = () => {
    if (userInput.trim()) {
      dispatch(addTodo(userInput));
      setInputError("");
      setUserInput("");
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnAddClick();
    }
  };

  return (
    <section className="flex flex-col select-none">
      <div className="overflow-x-hidden flex flex-col items-center lg:justify-between lg:items-center gap-2 md:gap-4 py-2 mb-2 border-2 border-solid rounded-lg">
        <TodoCategoryOptions />
        <div className="flex justify-center items-center">
          <div className="relative">
            <label
              htmlFor="taskInput"
              className="flex items-center relative w-60 md:w-72"
            >
              <input
                type="text"
                id="taskInput"
                className="h-10 w-full py-1 ps-3 pe-20 text-black bg-[#fffafa] border-0 rounded-2xl focus:outline-none transition duration-medium caret-black"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                ref={inputRef}
              />
              <button
                type="button"
                onClick={handleOnAddClick}
                className="ms-2 absolute end-0 flex justify-center h-10 py-2 px-6 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white transition duration-medium"
              >
                Add
              </button>
            </label>
          </div>
        </div>
      </div>
      <p className="text-warning-color">
        {inputError && "Please insert valid text"}
      </p>
    </section>
  );
}

export default TodoInputForm;
