import Icon from "./Icon";

/* eslint-disable react/prop-types */
function TodoItemFullTime({ isTodoChecked, timing }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <div className="flex items-center gap-1">
        <Icon name="list-plus" size="15" />
        <p className="">
          {timing?.createdAt.date} - {timing?.createdAt.time}
        </p>
      </div>

      {isTodoChecked && (
        <div className="flex items-center gap-1">
          <Icon name="list-check" size="15" />
          <p className="text-xs text-gray-400">
            {timing?.checkedAt?.date} - {timing?.checkedAt?.time}
          </p>
        </div>
      )}
    </div>
  );
}

export default TodoItemFullTime;
