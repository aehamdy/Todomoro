/* eslint-disable react/prop-types */
import { BiSolidEdit } from "react-icons/bi";
import {
  LuBookText,
  LuBriefcaseBusiness,
  LuCircle,
  LuCircleCheckBig,
  LuFileText,
  LuList,
  LuTrash2,
  LuUserRound,
} from "react-icons/lu";

const iconMap = {
  trash: LuTrash2,
  edit: BiSolidEdit,
  emptyCircle: LuCircle,
  checkedCircle: LuCircleCheckBig,
  //categories options
  all: LuList,
  user: LuUserRound,
  briefcase: LuBriefcaseBusiness,
  book: LuBookText,
  list: LuFileText,
};

function Icon({ name, size = 18, className = "" }) {
  const IconComponent = iconMap[name];
  const defaultStyles = "duration-short";

  if (!IconComponent) {
    console.warn(
      `Icon ${name} is not defined in iconMap. Check you name prop or iconMap`
    );
    return null;
  }

  return (
    <IconComponent size={size} className={`${className} ${defaultStyles}`} />
  );
}

export default Icon;
