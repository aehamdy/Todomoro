/* eslint-disable react/prop-types */
function List(props) {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i} className="text-black">
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default List;
