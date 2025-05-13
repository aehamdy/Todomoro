function getTime() {
  const d = new Date();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const fullTime = `${hours}:${minutes}`;

  return { fullTime };
}

function getDate() {
  const d = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];
  const month = monthNames[d.getMonth()];
  const date = d.getDate();
  const fullDate = `${month} ${date}`;

  return { fullDate };
}

const getDateAndTime = () => {
  const { fullDate } = getDate();
  const { fullTime } = getTime();

  return { fullDate, fullTime };
};

export default getDateAndTime;
