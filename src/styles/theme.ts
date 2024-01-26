import { DefaultTheme } from "styled-components";

const colors = {
  primary50: "#fafafa",
  primary100: "#f5f5f5",
  primary200: "#eeeeee",
  primary300: "#e0e0e0",
  primary400: "#bdbdbd",
  primary500: "#9e9e9e",
  primary600: "#757575",
  primary700: "#616161",
  primary800: "#525252",
  primary900: "#212121",
  accent500: "#f7bc0c",
};

export type ColorsTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
