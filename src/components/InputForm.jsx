import { useState } from "react";
import List from "./List";
import TodoCategories from "./TodoCategories";

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [category, setCategory] = useState("personal");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (userInput.trim()) {
      setInputError(false);
      setTodos([
        {
          id: todos.length + 1,
          value: userInput,
          category: category,
          isChecked: false,
        },
        ...todos,
      ]);
      setUserInput("");
    } else {
      setInputError(true);
    }
  };

  const handleClear = () => {
    setUserInput("");
  };

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
      <List todos={todos} setTodos={setTodos} />
      {console.log(todos)}
    </>
  );
}

export default InputForm;
