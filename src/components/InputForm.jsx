import { useEffect, useRef, useState } from "react";
import List from "./List";
import TodoCategories from "./TodoCategories";

export const LOCAL_STORAGE_KEY = "TodomoroTasks";

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [category, setCategory] = useState("personal");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput("");
  };

  const save = (items) => {
    const list = JSON.stringify(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, list);
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
        <div className="flex justify-between items-center border-2 border-solid rounded-lg py-2 px-4 mb-4">
          <div>
            <label htmlFor="taskInput" className="flex items-center relative">
              <input
                type="text"
                id="taskInput"
                className="p-1 rounded-md focus:outline-none"
                value={userInput}
                onChange={handleInputChange}
                ref={inputRef}
              />
              <span
                className="absolute end-2 text-white hover:text-warning-color transition duration-medium cursor-pointer"
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
              className="flex items-center justify-center w-12 h-10 py-2 px-4 rounded-md hover:border-transparent"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-warning-color">
          {inputError && "Please insert valid text"}
        </p>
      </section>
      <List todos={todos} setTodos={setTodos} save={save} />
    </>
  );
}

export default InputForm;
