import { LuCircle, LuCircleCheckBig, LuTrash2 } from "react-icons/lu";

/* eslint-disable react/prop-types */
const iconMap = {
  trash: LuTrash2,
  emptyCircle: LuCircle,
  checkedCircle: LuCircleCheckBig,
};

function Icon({ name, size, className = "" }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon ${name} is not defined in iconMap. Check you name prop or iconMap`
    );
    return null;
  }

  return <IconComponent size={size} className={`${className}`} />;
}

export default Icon;
