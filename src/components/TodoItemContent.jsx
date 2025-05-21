/* eslint-disable react/prop-types */
function TodoItemContent({ todo }) {
  return (
    <p
      className={`${
        !todo.isChecked
          ? "text-sm md:text-base text-stone-900"
          : "text-xs md:text-sm text-stone-500 line-through"
      } select-none`}
    >
      {todo.content}
    </p>
  );
}

export default TodoItemContent;
