/* eslint-disable react/prop-types */
const genderOptions = ["male", "female"];

function GenderSelection(props) {
  const { setUser, user, setIsGenderSelected } = props;

  const handleSelectChange = (e) => {
    setUser((prevValue) => ({ ...prevValue, gender: e.target.value }));
    setIsGenderSelected(true);
  };

  return (
    <select
      name=""
      id=""
      value={user.gender}
      className="bg-transparent border border-gray-300 rounded-lg p-2 focus:border-none focus:outline outline-blue-500"
      onChange={handleSelectChange}
    >
      <option hidden>Select Gender</option>
      {genderOptions.map((item, i) => (
        <option value={item} key={i}>
          {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
}

export default GenderSelection;
