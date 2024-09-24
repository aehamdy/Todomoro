const genderOptions = ["male", "female"];

function GenderSelection() {
  return (
    <select
      name=""
      id=""
      className="bg-transparent border border-gray-300 rounded-lg p-2"
    >
      <option hidden>Select Gender</option>
      {genderOptions.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default GenderSelection;
