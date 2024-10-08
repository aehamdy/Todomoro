import { useEffect, useState } from "react";
import { TODOMORO_USER } from "../pages/Home";

const iconSize = "26";
const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="6" stroke="#1C274C" strokeWidth="1.5" />
    <path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 18.678l-.393.393M19.07 19.07l-.392-.393M5.322 5.322l-.393-.393"
    />
  </svg>
);
const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={iconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#1C274C"
      d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z"
    />
    <path
      fill="#1C274C"
      d="m21.067 11.857-.642-.388.642.388Zm-8.924-8.924-.388-.642.388.642ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606l1.284.776Z"
    />
  </svg>
);

function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(TODOMORO_USER));
    return storedValue?.isThemeDark || null;
  });

  const [themeIcon, setThemeIcon] = useState(darkMode ? moonIcon : sunIcon);

  const handleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    const storedValue = JSON.parse(localStorage.getItem(TODOMORO_USER));

    const newValue = { ...storedValue, isThemeDark: newMode };

    localStorage.setItem(TODOMORO_USER, JSON.stringify(newValue));
  };

  useEffect(() => {
    setThemeIcon(darkMode ? moonIcon : sunIcon);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex items-center">
      <button type="button" onClick={handleMode}>
        {themeIcon}
      </button>
    </div>
  );
}

export default ThemeToggleButton;
