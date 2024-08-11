/* eslint-disable react/prop-types */
import ClearButton from "./ClearButton";

function LeftTodos(props) {
  const { handleLeftTodos, save, setTodos } = props;
  return (
    <section className="flex justify-between px-2 mb-1">
      <div>
        <p className="text-label-color ">
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
