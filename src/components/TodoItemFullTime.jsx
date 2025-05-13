/* eslint-disable react/prop-types */
function TodoItemFullTime({ todo }) {
  return (
    <p className="text-xs text-gray-400">
      {todo.date} - {todo.time}
    </p>
  );
}

export default TodoItemFullTime;
