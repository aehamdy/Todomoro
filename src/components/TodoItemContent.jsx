/* eslint-disable react/prop-types */
function TodoItemContent({ todo }) {
  return (
    <p
      className={`${
        !todo.isChecked ? "text-black" : "text-stone-400 line-through"
      } select-none`}
    >
      {todo.content}
    </p>
  );
}

export default TodoItemContent;
