import { TODOMORO_USERNAME } from "../pages/Home";

function Header() {
  const getUsername = () => {
    const name = localStorage.getItem(TODOMORO_USERNAME);
    return name;
  };

  return (
    <header className="flex gap-2 text-black">
      <p>What&apos;s up </p>
      <p>{getUsername()}</p>
    </header>
  );
}

export default Header;
