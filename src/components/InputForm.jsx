/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import TodoCategories from "./TodoCategories";
import { LOCAL_STORAGE_KEY } from "./TodoApp";

function InputForm(props) {
  const { todos, setTodos, save, setLeftTodos, leftTodos } = props;
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [category, setCategory] = useState("personal");
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput("");
  };

  const handleClick = () => {
    if (userInput.trim()) {
      setInputError(false);

      const newTodos = [
        {
          id: Date.now(),
          value: userInput,
          category: category,
          isChecked: false,
        },
        ...todos,
      ];

      setTodos(newTodos);
      save(newTodos);

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
      <section className="flex flex-col">
        {console.log({ todos: todos, leftTodos: leftTodos })}
        <div className="flex justify-between items-center border-2 border-solid rounded-lg py-2 px-4 mb-2">
          <div>
            <label htmlFor="taskInput" className="flex items-center relative">
              <input
                type="text"
                id="taskInput"
                className="p-1 px-2 text-black bg-orange-50 border-0 rounded-md focus:outline-none hover:shadow-lg focus:shadow-lg transition duration-medium caret-black"
                value={userInput}
                onChange={handleInputChange}
                ref={inputRef}
              />
              <span
                className="absolute end-3 text-black hover:text-warning-color transition duration-medium cursor-pointer"
                onClick={handleClear}
              >
                X
              </span>
            </label>
          </div>
          <TodoCategories setCategory={setCategory} />
          <div>
            <button
              type="button"
              onClick={handleClick}
              className="flex items-center justify-center w-12 h-10 py-2 px-4 rounded-md bg-orange-50 text-black hover:shadow-lg transition duration-medium"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-warning-color">
          {inputError && "Please insert valid text"}
        </p>
      </section>
    </>
  );
}

export default InputForm;
