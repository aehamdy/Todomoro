/* eslint-disable react/prop-types */
import Circle from "../../public/circle.svg";
import TickedCircle from "../../public/circle-tick.svg";
import emptyList from "../../public/list-solid.svg";

function List(props) {
  const { todos, setTodos } = props;
  const emptyListIcon = 60;

  const handleTaskCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

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
          </li>
        ))
      )}
    </ul>
  );
}

export default List;
