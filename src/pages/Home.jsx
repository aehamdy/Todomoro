import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

export const TODOMORO_USERNAME = "TodomoroUsername";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      //   fill="#0F1729"
      fill="blue"
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

function Home() {
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [error, setError] = useState("");

  const save = (name) => {
    localStorage.setItem(TODOMORO_USERNAME, name);
  };

  const formatUsername = (value) => {
    const name = value.toLowerCase();
    const splittedName = name.split(" ");
    const endValue = splittedName.map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1)
    );
    const fullName = endValue.join(" ");
    return fullName;
  };

  const validateInputField = (text) => {
    const value = text.split("");
    const result = !value.some((val) => /-?\d/.test(val));
    return result;
  };

  const handleInputChange = (e) => {
    setError("");
    const value = e.target.value;
    const trimmedValue = value.trim();
    const result = validateInputField(trimmedValue);
    !result && setError("Your name cannot contain any digit...");
    trimmedValue.length < 3 || !result
      ? setIsUsernameValid(false)
      : setIsUsernameValid(true);
    setUsername(value);
  };

  const handleInputBlur = () => {
    const name = formatUsername(username);
    const value = name.trim().split("");
    value.length < 3 && setError("Oopps, short names are not allowed");
    // if (value.some((val) => /-?\d/.test(val))) {
    //   setError("Name must be doesn't include numbers!");
    // }
    save(name);
  };

  return (
    <section className="flex flex-col items-center gap-3 text-black bg-app-bg py-9 px-8 rounded-3xl">
      <h3>Welcome to</h3>
      <h2>Todomoro App</h2>
      {/* <p>
        The app that helps you concentrate on your work, study, personal life
        and more...
      </p> */}
      <p>The perfect app for your work, study, personal life and more...</p>
      <div className="w-full flex justify-center flex-wrap items-center gap-4">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className=" block w-full p-2.5 text-gray-900 bg-transparent border border-gray-300 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter at least three characters name"
          />
        </div>

        {isUsernameValid && (
          <Link
            to="/app"
            className="flex gap-1 p-2 rounded-lg focus:outline outline-blue-500 outline-2"
          >
            Get Started <span>{arrowIcon}</span>
          </Link>
        )}
      </div>
      <ErrorMessage message={error} />
    </section>
  );
}

export default Home;
