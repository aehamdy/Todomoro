/* eslint-disable react/prop-types */
import Circle from "../../public/circle.svg";
import TickedCircle from "../../public/circle-tick.svg";

function List(props) {
  const { todos, setTodos } = props;

  const handleTaskCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <ul className="border border-black rounded-lg py-2 px-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleTaskCheck(todo.id)}
          className="border border-black rounded-lg text-black flex px-2 py-2 cursor-pointer"
          style={{ textDecoration: todo.isChecked ? "line-through" : "none" }}
        >
          <img
            className="me-2"
            src={!todo.isChecked ? Circle : TickedCircle}
            alt="taskCircle"
            width="17"
            height="17"
          />
          <p>{todo.value}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
