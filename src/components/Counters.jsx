import { useState } from "react";
import PomodoroTimer from "./PomodoroTimer";
import Timer from "./Timer";

const pomodoroIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2Z"
    />
  </svg>
);

const newIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="25"
    viewBox="0 0 512 512"
  >
    <path d="M256 102.4c-103.253 0-187.733 84.48-187.733 187.733 0 50.764 20.43 96.981 53.462 130.861.328.492.71.963 1.152 1.405.484.484.97.891 1.473 1.238 33.949 33.484 80.49 54.229 131.647 54.229 103.253 0 187.733-84.48 187.733-187.733S359.253 102.4 256 102.4zm145.067 196.267h25.385c-2.023 40.571-18.386 77.528-44.093 105.879l-17.985-17.985c-3.413-3.413-8.533-3.413-11.947 0-3.413 3.413-3.413 8.533 0 11.947l17.985 17.985c-28.35 25.707-65.308 42.07-105.879 44.093V435.2c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v25.385c-40.784-2.034-77.916-18.559-106.325-44.5l17.578-17.578c3.413-3.413 3.413-8.533 0-11.947-3.413-3.413-8.533-3.413-11.947 0l-17.533 17.534c-25.474-28.291-41.679-65.07-43.692-105.427h25.385c4.267 0 8.533-3.413 8.533-8.533s-3.413-8.533-8.533-8.533H85.548c2.023-40.571 18.386-77.528 44.093-105.879l17.985 17.985c1.707 1.707 3.413 2.56 5.973 2.56 1.707 0 4.267-.853 5.973-2.56 3.413-3.413 3.413-8.533 0-11.947l-17.985-17.985c28.35-25.707 65.308-42.07 105.879-44.093v25.385c0 5.12 3.413 8.533 8.533 8.533 4.267 0 8.533-3.413 8.533-8.533v-25.385c40.571 2.023 77.528 18.386 105.879 44.093l-17.985 17.985c-3.413 3.413-3.413 8.533 0 11.947 1.707 1.707 3.413 2.56 5.973 2.56s4.267-.853 5.973-2.56l17.985-17.985c25.707 28.35 42.07 65.308 44.093 105.879h-25.385c-5.12 0-8.533 3.413-8.533 8.533s3.415 8.533 8.535 8.533z" />
    <path d="M469.333 154.453c6.827 0 13.653-2.56 18.773-7.68 10.24-10.24 10.24-27.307 0-37.547l-34.133-34.133c-10.24-10.24-27.307-10.24-37.547 0-8.316 8.316-9.878 21.133-4.688 31.141l-13.759 13.759c-30.247-25.306-67.268-42.746-107.847-49.081V51.2h16.213c10.24 0 17.92-7.68 17.92-17.067V17.92c0-10.24-7.68-17.92-17.92-17.92H204.8c-9.387 0-17.067 7.68-17.067 17.92v15.36c0 10.24 7.68 17.92 17.067 17.92h17.067v19.712c-40.371 6.302-77.223 23.593-107.384 48.69l-13.941-13.941c4.842-9.92 3.191-22.409-4.968-30.568-10.24-10.24-27.307-10.24-37.547 0l-34.133 34.133c-10.24 10.24-10.24 27.307 0 37.547 5.12 5.12 11.947 7.68 18.773 7.68 6.06 0 12.117-2.022 16.983-6.057l14.723 14.723c-25.327 36.043-40.24 79.869-40.24 127.013C34.133 412.16 133.973 512 256 512s221.867-99.84 221.867-221.867c0-46.926-14.777-90.562-39.89-126.51l14.846-14.846c4.782 3.781 10.645 5.676 16.51 5.676zm-40.96-67.413c1.707-1.707 4.267-2.56 6.827-2.56s5.12.853 6.827 2.56l34.133 34.133c3.413 4.267 4.267 10.24 0 13.653s-10.24 3.413-13.653 0l-1.543-1.543a8.875 8.875 0 0 0-1.871-2.724l-29.867-29.867a9.062 9.062 0 0 0-1.804-1.394c-2.416-4.096-2.105-9.202.951-12.258zm-5.973 31.573 17.92 17.92-12.8 12.8c-5.12-6.827-11.093-12.8-17.067-18.773l11.947-11.947zM204.8 17.067l102.4.853v15.36c0 .853 0 .853-.853.853L204.8 33.28V17.067zM238.933 51.2h34.133v17.722a222.189 222.189 0 0 0-34.134 0V51.2zM89.6 118.613l11.947 11.947c-5.973 5.973-11.947 11.947-17.067 18.773l-12.8-12.8 17.92-17.92zm-53.76 16.214c-3.413-4.267-3.413-10.24 0-13.653L69.973 87.04c1.707-1.707 4.267-2.56 6.827-2.56s5.12.853 6.827 2.56c3.413 4.267 3.413 10.24 0 13.653L53.76 130.56l-4.267 4.267c-3.413 3.413-10.24 3.413-13.653 0zM256 494.933c-112.64 0-204.8-92.16-204.8-204.8 0-45.669 15.152-87.969 40.673-122.128.38-.248.76-.499 1.14-.752 7.68-11.093 17.067-20.48 27.307-29.867.348-.348.651-.737.928-1.142 29.931-26.26 67.508-43.989 108.838-49.267.387.037.777.062 1.167.062 17.067-1.707 32.427-1.707 49.493 0h.853c.171 0 .356-.015.542-.032C382.556 99.947 460.8 186.346 460.8 290.133c0 112.64-92.16 204.8-204.8 204.8z" />
    <path d="M264.533 257.088V179.2c0-5.12-3.413-8.533-8.533-8.533s-8.533 3.413-8.533 8.533v77.888c-14.679 3.814-25.6 17.216-25.6 33.046 0 18.773 15.36 34.133 34.133 34.133s34.133-15.36 34.133-34.133c0-15.83-10.921-29.232-25.6-33.046zM256 307.2c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.067 17.067-17.067 17.067 7.68 17.067 17.067S265.387 307.2 256 307.2z" />
  </svg>
);

// const timerIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="33"
//     fill="none"
//     viewBox="0 0 24 24"
//   >
//     <path
//       fill="#1F2328"
//       fillRule="evenodd"
//       d="M12 20a7 7 0 0 0 4.98-11.92l1.207-1.206-1.06-1.061-1.315 1.315A6.958 6.958 0 0 0 12.75 6.04V4.5H15V3H9v1.5h2.25v1.54a6.958 6.958 0 0 0-3.062 1.088L6.874 5.813l-1.061 1.06L7.02 8.081A7 7 0 0 0 12 20Zm0-12.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
//       clipRule="evenodd"
//     />
//     <path
//       fill="#1F2328"
//       fillRule="evenodd"
//       d="M12.5 12.5V9H11v5h4v-1.5h-2.5Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

const timerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M20.75 13.25c0 4.83-3.92 8.75-8.75 8.75s-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75ZM12 8v5"
    />
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9 2h6"
    />
  </svg>
);

function Counters() {
  const [selectedTimer, setSelectedTimer] = useState();

  const handleTimerChange = (e) => {
    setSelectedTimer(e.target.value);
  };

  const customInnerShadow = {
    boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.2)",
  };

  // Colors: #91915B #FFCB94 #FFEBB5 #F87C4D #A4404C
  // Colors: #FCC201 #DA9101 #940D21 #CF2121 #ED5742
  // Colors: #C4F0C5 #F1FFF1 #9EBFCB

  return (
    <section className="relative">
      <div className="flex md:flex-col items-center py-2 md:py-2 md:px-4 border-2 border-solid rounded-lg">
        <div className="w-fit flex items-center gap-1 p-0 mx-auto text-black bg-[#fffafa] rounded-lg">
          <label
            htmlFor="pomodoro"
            className={`flex items-center rounded-s-lg py-2 px-2 ${
              selectedTimer === "pomodoro" && "bg-gray-100"
            } select-none cursor-pointer`}
            style={selectedTimer === "pomodoro" ? customInnerShadow : {}}
          >
            <input
              type="radio"
              id="pomodoro"
              name="selected_timer"
              value="pomodoro"
              checked={selectedTimer === "pomodoro"}
              onChange={handleTimerChange}
              className="appearance-none"
            />
            <span>{pomodoroIcon}</span>
            Pomodoro
          </label>
          <label
            htmlFor="timer"
            className={`flex items-center rounded-e-lg py-2 px-2 ${
              selectedTimer === "timer" && "bg-gray-100"
            } select-none cursor-pointer`}
            style={selectedTimer === "timer" ? customInnerShadow : {}}
          >
            <input
              type="radio"
              id="timer"
              name="selected_timer"
              value="timer"
              checked={selectedTimer === "timer"}
              onChange={handleTimerChange}
              className="appearance-none"
            />
            <span>{timerIcon}</span>
            Timer
          </label>
        </div>
      </div>
      <div className="md:absolute md:w-full my-3 md:left-1/2 md:top-1/2 md:translate-x-[-50%] md:translate-y-[-50%]">
        {selectedTimer === "pomodoro" ? (
          <PomodoroTimer />
        ) : selectedTimer === "timer" ? (
          <Timer />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Counters;
