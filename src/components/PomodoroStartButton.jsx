/* eslint-disable react/prop-types */

const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    // fill="#222"
    fill="#6aa5a9"
    // fill="#fff"
    viewBox="0 0 24 24"
  >
    <path
      // stroke="#323232"
      // stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M4 5.497v13.006c0 1.547 1.68 2.508 3.014 1.724l11.055-6.503c1.315-.773 1.315-2.675 0-3.448L7.014 3.773C5.681 2.989 4 3.95 4 5.497Z"
    />
  </svg>
);

function PomodoroStartButton(props) {
  const { onStartSession } = props;

  return (
    <button
      type="button"
      onClick={onStartSession}
      // className="py-1 px-2 rounded text-black bg-all-color"
      // className="bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
      // className="bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      // className="bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
      className="bg-white hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center"
      // className="bg-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mb-2"
      // className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      // className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      // className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      // className="bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
    >
      {playIcon}
    </button>
  );
}

export default PomodoroStartButton;
