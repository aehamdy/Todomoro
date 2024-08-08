import { useState } from "react";

function InputForm() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    setTasks([userInput, ...tasks]);
  };

  return (
    <section>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button type="button" onClick={handleClick}>
        Add Task
      </button>
    </section>
  );
}

export default InputForm;
