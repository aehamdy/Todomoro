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
          id: todos.length + 1,
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
      <section className="flex">
        <div>
          <label htmlFor="taskInput" className="relative">
            <input
              type="text"
              id="taskInput"
              value={userInput}
              onChange={handleInputChange}
              ref={inputRef}
            />
            <span
              className="absolute end-2 text-white cursor-pointer"
              onClick={handleClear}
            >
              X
            </span>
          </label>
          <p>{inputError && "Please insert a valid task"}</p>
        </div>
        <TodoCategories setCategory={setCategory} />
        <div>
          <button type="button" onClick={handleClick}>
            +
          </button>
        </div>
      </section>
      <List todos={todos} setTodos={setTodos} save={save} />
    </>
  );
}

export default InputForm;
