/* eslint-disable react/prop-types */
import Circle from "../../public/circle.svg";
import TickedCircle from "../../public/circle-tick.svg";
import emptyList from "../../public/list-solid.svg";
import TrashBin from "../../public/trash-bin.svg";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "./InputForm";

function List(props) {
  const { todos, setTodos, save } = props;
  const emptyListIcon = 60;

  const handleDeletion = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
    save(updatedList);
  };

  const handleTaskCheck = (id) => {
    const items = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(items);
    save(items);
  };

  const load = () => {
    const listItems = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (listItems) {
      setTodos(JSON.parse(listItems));
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ul className="border border-black rounded-lg py-2 px-4">
      {todos.length < 1 ? (
        <>
          <img
            src={emptyList}
            alt=""
            width={emptyListIcon}
            height={emptyListIcon}
          />
          <p>The list is empty, lets add tasks</p>
        </>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleTaskCheck(todo.id)}
            className="border border-black rounded-lg text-black flex px-2 py-2 cursor-pointer"
            style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
          >
            <img
              className="me-2 fill-blue-500"
              src={!todo.isChecked ? Circle : TickedCircle}
              alt="taskCircle"
              width="17"
              height="17"
            />
            <p>{todo.value}</p>
            <div>
              <span onClick={(e) => handleDeletion(e, todo.id)}>
                <img
                  className="cursor-pointer"
                  src={TrashBin}
                  alt="trash icon"
                  width="20"
                />
              </span>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default List;
