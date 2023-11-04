const lightColors = {
  grayLight: 'hsla(0, 0%, 96%, 1)',
  gray: 'hsla(0, 0%, 91%, 1)',
  grayDark: 'hsla(0, 0%, 74%, 1)',
  grayDarker: 'hsla(0, 0%, 40%, 1)',
  green: 'hsla(137, 34%, 53%, 0.9)',
  black: 'hsla(0, 0%, 0%, 1)',
  white: 'hsla(0, 0%, 100%, 1)',
};

const darkColors = {
  grayLight: 'hsla(0, 0%, 4%, 1)',
  gray: 'hsla(0, 0%, 9%, 1)',
  grayDark: 'hsla(0, 0%, 26%, 1)',
  grayDarker: 'hsla(0, 0%, 60%, 1)',
  green: 'hsla(137, 34%, 53%, 0.9)',
  black: 'hsla(0, 0%, 1000%, 1)',
  white: 'hsla(0, 0%, 0%, 1)',
};

const fontSize = {
  title: 36,
  content: 16,
  label: 14,
};

const roundness = {
  default: 8,
  full: 9999,
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
};

const baseTheme = {
  colors: lightColors,
  fontSize,
  roundness,
  spacing,
};
export type ITheme = typeof baseTheme;

export const lightTheme: ITheme = baseTheme;
export const darkTheme: ITheme = {
  ...baseTheme,
  colors: darkColors,
};
