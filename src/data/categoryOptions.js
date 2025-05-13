import { categoryTypes } from "../constants";

const categories = [
  {
    id: categoryTypes.ALL,
    value: categoryTypes.ALL,
    icon: "all",
    bg: "bg-all-color",
  },

  {
    id: categoryTypes.PERSONAL,
    value: categoryTypes.PERSONAL,
    icon: "user",
    bg: "bg-personal-color",
  },

  {
    id: categoryTypes.WORK,
    value: categoryTypes.WORK,
    icon: "briefcase",
    bg: "bg-work-color",
  },

  {
    id: categoryTypes.STUDY,
    value: categoryTypes.STUDY,
    icon: "book",
    bg: "bg-study-color",
  },

  {
    id: categoryTypes.OTHER,
    value: categoryTypes.OTHER,
    icon: "list",
    bg: "bg-other-color",
  },
];

export default categories;
