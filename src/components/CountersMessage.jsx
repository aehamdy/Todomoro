/* eslint-disable react/prop-types */

function CountersMessage({ message, username, messageStyle, nameStyle }) {
  return (
    <p className={messageStyle}>
      {message}
      <span className={nameStyle}>{username}</span>
    </p>
  );
}

export default CountersMessage;
