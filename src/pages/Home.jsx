import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import GenderSelection from "../components/GenderSelection";

export const TODOMORO_USER = "TodomoroUser";

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      //   fill="#0F1729"
      fill="white"
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

function Home() {
  const [user, setUser] = useState({ name: "", gender: "" });
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isGenderSelected, setIsGenderSelected] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const save = (name, gender) => {
    localStorage.setItem(
      TODOMORO_USER,
      JSON.stringify({ name: name, gender: gender })
    );
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

    !result && setError("Your name cannot contain digits...");

    trimmedValue.length < 3 || !result
      ? setIsUsernameValid(false)
      : setIsUsernameValid(true);

    setUser((prevValue) => ({ ...prevValue, name: value }));
  };

  const handleInputBlur = (e) => {
    const value = e.target.value;

    value.length < 3 &&
      setError("Enter a name with at least three characters.");
  };

  const submitUsername = () => {
    const name = formatUsername(user.name);
    const value = name.trim().split("");
    value.length < 3 &&
      setError("Oops! Enter a name with at least 3 characters");
    save(name, user.gender);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isUsernameValid) {
      submitUsername();
      navigate("/app");
    }
  };

  const checkLocalStorageUsername = () => {
    const storedValue = localStorage.getItem(TODOMORO_USER);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  useEffect(() => {
    const username = checkLocalStorageUsername();

    if (username) {
      navigate("/app");
    }
  }, [navigate]);

  return (
    <section className="font-patrickhand flex flex-col items-center gap-3 text-xl text-black bg-app-bg py-9 px-8 rounded-3xl">
      <h3>Welcome to</h3>
      <h2 className="font-leckerlione text-4xl">Todomoro App</h2>
      {/* <h2 className="font-patrickhand text-4xl">Todomoro App</h2> */}
      {/* <p>
        The app that helps you concentrate on your work, study, personal life
        and more...
      </p> */}
      <p>The perfect app for your work, study, personal life and more...</p>
      <div className="w-full flex justify-center flex-wrap items-center gap-4">
        <div className="relative">
          <input
            type="text"
            value={user.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyPress}
            className=" block w-72 p-2.5 text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your name..."
          />
          <ErrorMessage message={error} />
        </div>
        <GenderSelection
          setUser={setUser}
          user={user}
          setIsGenderSelected={setIsGenderSelected}
        />
        {isUsernameValid && isGenderSelected && (
          <Link
            to="/app"
            onClick={submitUsername}
            className="flex items-center gap-1 p-2 rounded-lg text-white hover:text-white bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 duration-200 border-none focus:outline-none"
          >
            Get Started <span>{arrowIcon}</span>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Home;
