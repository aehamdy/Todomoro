/* eslint-disable react/prop-types */
const genderOptions = ["male", "female"];

function GenderSelection(props) {
  const { setUser, user } = props;

  const handleSelectChange = (e) => {
    setUser((prevValue) => ({ ...prevValue, gender: e.target.value }));
  };

  return (
    <select
      name=""
      id=""
      value={user.gender}
      className="bg-transparent border border-gray-300 rounded-lg p-2"
      onChange={handleSelectChange}
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
