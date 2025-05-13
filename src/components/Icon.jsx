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

// common icons
const userIcon = LuUserRound;
const briefcaseIcon = LuBriefcaseBusiness;
const bookIcon = LuBookText;
const otherIcon = LuFileText;

const iconMap = {
  // actions
  trash: LuTrash2,
  edit: BiSolidEdit,
  emptyCircle: LuCircle,
  checkedCircle: LuCircleCheckBig,

  //categories options
  all: LuList,
  user: userIcon,
  briefcase: briefcaseIcon,
  book: bookIcon,
  list: otherIcon,

  // todo/categories buttons
  personal: userIcon,
  work: briefcaseIcon,
  study: bookIcon,
  other: otherIcon,
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
