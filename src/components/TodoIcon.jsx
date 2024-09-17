const tickIconSize = 18;

const dashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={tickIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 12h12"
    />
  </svg>
);
const tickedCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={tickIconSize}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#928e85"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
    />
    <path
      stroke="#928e85"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m7.75 12 2.83 2.83 5.67-5.66"
    />
  </svg>
);
const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={tickIconSize}
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-current text-[#292D32] hover:text-blue-600"
  >
    <path
      // stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
    />
    <path
      // stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
    />
  </svg>
);
const trashBinIcon = (
  <div className="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={tickIconSize}
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-current text-black hover:text-red-600"
    >
      <path
        // stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
      />
    </svg>
  </div>
);
const grayTrashBinIcon = (
  <div className="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={tickIconSize}
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-current text-[#a9a9a9] hover:text-red-600"
    >
      <path
        // stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
      />
    </svg>
  </div>
);

function TodoIcon({ icon }) {
  const handleIcon = () => {
    switch (icon) {
      case "dashIcon":
        return dashIcon;
      case "tickedCircleIcon":
        return tickedCircleIcon;
      case "editIcon":
        return editIcon;
      case "trashbinIcon":
        return trashBinIcon;
      case "grayTrashBinIcon":
        return grayTrashBinIcon;
      default:
        return null;
    }
  };

  return handleIcon();
}

export default TodoIcon;
