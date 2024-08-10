import ClearButton from "./ClearButton";

/* eslint-disable react/prop-types */
function LeftTodos(props) {
  const { handleLeftTodos, save, setTodos } = props;
  return (
    <section>
      <div>
        <p>
          {handleLeftTodos === 1
            ? `${handleLeftTodos} todo left`
            : handleLeftTodos > 1
            ? `${handleLeftTodos} todos left`
            : ""}
        </p>
      </div>
      <div>
        <ClearButton save={save} setTodos={setTodos} />
      </div>
    </section>
  );
}

export default LeftTodos;
