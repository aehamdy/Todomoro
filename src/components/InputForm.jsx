import { useState } from "react";

function InputForm() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section>
      <input type="text" value={userInput} onChange={handleInputChange} />
    </section>
  );
}

export default InputForm;
