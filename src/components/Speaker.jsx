/* eslint-disable react/prop-types */
import { useState } from "react";

function Speaker(props) {
  const { toggleSound } = props;
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);

  const iconSize = 30;

  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width={iconSize}
  //     fill="none"
  //     viewBox="0 0 28 28"
  //   >
  //     <path
  //       //   fill="#212121"
  //       fill={color === "pomodoro-rest-theme" ? "#14401d" : iconColor}
  //       d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.749 2.105.183 2.105-.912V4.814Zm-6.016 4.812L15 5.391v17.216l-4.516-4.231a3.25 3.25 0 0 0-2.222-.879H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.492c0-.966.784-1.75 1.75-1.75h3.011a3.25 3.25 0 0 0 2.223-.879ZM22.702 5.252a.75.75 0 0 0-1.126.99A11.702 11.702 0 0 1 24.5 14c0 2.973-1.103 5.687-2.924 7.757a.75.75 0 1 0 1.126.99A13.202 13.202 0 0 0 26 14c0-3.352-1.245-6.415-3.298-8.748Z"
  //     />
  //     <path
  //       // fill="#212121"
  //       fill={color === "pomodoro-rest-theme" ? "#14401d" : iconColor}
  //       d="M20.353 8.303a.75.75 0 1 0-1.2.9A7.961 7.961 0 0 1 20.75 14c0 1.8-.594 3.46-1.597 4.797a.75.75 0 1 0 1.2.9A9.461 9.461 0 0 0 22.25 14c0-2.136-.706-4.11-1.897-5.697Z"
  //     />
  //   </svg>
  // );

  // const speakerOff = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width={iconSize}
  //     fill={color === "pomodoro-rest-theme" ? "#14401d" : iconColor}
  //     viewBox="0 0 28 28"
  //   >
  //     <path
  //       // fill="#212121"
  //       fill={color === "pomodoro-rest-theme" ? "#14401d" : iconColor}
  //       d="M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.095-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.169 1.197-.473l4.937-4.63ZM15 5.392l-4.516 4.234a3.25 3.25 0 0 1-2.223.88H5.25a1.75 1.75 0 0 0-1.75 1.75v3.491c0 .967.784 1.75 1.75 1.75h3.012c.825 0 1.62.314 2.222.879L15 22.607V5.391ZM19.782 10.722a.75.75 0 0 0-1.064 1.056l2.218 2.235-2.215 2.206a.75.75 0 1 0 1.058 1.062l2.218-2.207 2.225 2.208a.75.75 0 0 0 1.056-1.064l-2.22-2.205 2.224-2.234a.75.75 0 1 0-1.063-1.058l-2.223 2.231-2.214-2.23Z"
  //     />
  //   </svg>
  // );

  const speakerOnIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeWidth="1.5"
        d="M2 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3Z"
      />
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 8a6.66 6.66 0 0 1 0 8M19.83 5.5a10.83 10.83 0 0 1 0 13"
      />
    </svg>
  );
  const speakerOffIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h2M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M18.81 9.42c.9 2.15.63 4.66-.81 6.58M21.15 7.8a10.82 10.82 0 0 1-1.32 10.7M22 2 2 22"
      />
    </svg>
  );

  const speaker = isSpeakerOn ? speakerOnIcon : speakerOffIcon;

  const toggleSpeaker = () => {
    setIsSpeakerOn((prevValue) => !prevValue);
    toggleSound();
  };

  return (
    <span onClick={toggleSpeaker} className="cursor-pointer">
      {speaker}
    </span>
  );
}

export default Speaker;
