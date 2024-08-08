import { useState } from "react";
import List from "./List";

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    setTodos([userInput, ...todos]);
    setUserInput("");
  };

  return (
    <section>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button type="button" onClick={handleClick}>
        Add Task
      </button>
      <List todos={todos} />
    </section>
  );
}

export default InputForm;
