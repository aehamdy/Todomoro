import { useState } from "react";
import List from "./List";

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    if (userInput.trim()) {
      setInputError(false);
      setTodos([userInput, ...todos]);
      setUserInput("");
    } else {
      setInputError(true);
    }
  };

  return (
    <>
      <section className="flex">
        <div>
          <input type="text" value={userInput} onChange={handleInputChange} />
          <p>{inputError && "Please insert a valid task"}</p>
        </div>
        <div>
          <button type="button" onClick={handleClick}>
            Add Task
          </button>
        </div>
      </section>
      <List todos={todos} />
    </>
  );
}

export default InputForm;
