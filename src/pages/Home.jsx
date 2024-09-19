const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      //   fill="#0F1729"
      fill="blue"
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

function Home() {
  return (
    <section className="flex flex-col items-center gap-3 text-black bg-app-bg py-9 px-8 rounded-3xl">
      <h3>Welcome to</h3>
      <h2>Todomoro App</h2>
      {/* <p>
        The app that helps you concentrate on your work, study, personal life
        and more...
      </p> */}
      <p>The perfect app for your work, study, personal life and more...</p>
      <div className="flex">
        <input type="text" className="" placeholder="Please insert your name" />
        <span className="cursor-pointer">{arrowIcon}</span>
      </div>
    </section>
  );
}

export default Home;
