/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import TodoCategoryOptions from "./TodoCategoryOptions";
import { LOCAL_STORAGE_KEY } from "./TodoApp";

function TodoInputForm(props) {
  const { todos, setTodos, save, setLeftTodos } = props;
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [category, setCategory] = useState("personal");
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month} ${hours}:${minutes}`;
  };

  const handleClick = () => {
    if (userInput.trim()) {
      setInputError(false);

      const time = getDate();

      const newTodos = [
        {
          id: Date.now(),
          value: userInput,
          category: category,
          isChecked: false,
          time: time,
        },
        ...todos,
      ];

      setTodos(newTodos);
      save(newTodos);

      //calculate left todos upon adding a new todo
      const allTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      const filteredTodos = allTodos.filter((todo) => !todo.isChecked);
      setLeftTodos(filteredTodos.length);

      setUserInput("");
    } else {
      setInputError(true);
    }

    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <section className="flex flex-col select-none">
        <div className="flex flex-col items-center lg:justify-between lg:items-center gap-2 md:gap-4 py-2 mb-2 border-2 border-solid rounded-lg">
          <TodoCategoryOptions setCategory={setCategory} />
          <div className="flex justify-center items-center">
            <div className="relative">
              <label
                htmlFor="taskInput"
                className="flex items-center relative w-72"
              >
                <input
                  type="text"
                  id="taskInput"
                  className="py-1 ps-3 pe-20 h-10 w-80 text-black bg-[#fffafa] border-0 rounded-2xl focus:outline-none transition duration-medium caret-black"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  ref={inputRef}
                />
                <button
                  type="button"
                  onClick={handleClick}
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
    </>
  );
}

export default TodoInputForm;
