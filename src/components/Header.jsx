import { TODOMORO_USERNAME } from "../pages/Home";

function Header() {
  const getUsername = () => {
    const name = localStorage.getItem(TODOMORO_USERNAME);

    return name;
  };

  return (
    <header className="text-black">
      <p>Welcome {getUsername()}</p>
    </header>
  );
}

export default Header;
