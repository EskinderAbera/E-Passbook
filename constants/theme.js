import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#00adef",
  secondary: "#e38a26",

  green: "#66D59A",
  lightGreen: "#E6FEF0",

  lime: "#00BA63",
  emerald: "#2BC978",

  red: "#FF4134",
  lightRed: "#FFF1F0",

  purple: "#6B3CE9",
  lightpurple: "#F3EFFF",

  yellow: "#FFC664",
  lightyellow: "#FFF9EC",

  black: "#1E1F20",
  white: "#FFFFFF",
  chineseSilver: "#ccc",

  lightGray: "#FCFBFC",
  grey: "#C1C3C5",
  darkgray: "#C3C6C7",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
