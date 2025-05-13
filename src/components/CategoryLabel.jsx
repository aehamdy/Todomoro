/* eslint-disable react/prop-types */
function CategoryLabel({ label }) {
  return (
    <span className="">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
  );
}

export default CategoryLabel;
