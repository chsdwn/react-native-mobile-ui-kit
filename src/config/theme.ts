const lightColors = {
  grayLight: 'hsla(0, 0%, 96%, 1)',
  gray: 'hsla(0, 0%, 91%, 1)',
  grayDark: 'hsla(0, 0%, 74%, 1)',
  grayDarker: 'hsla(0, 0%, 40%, 1)',
  green: 'hsla(137, 34%, 53%, 0.9)',
  black: 'hsla(0, 0%, 0%, 1)',
  white: 'hsla(0, 0%, 100%, 1)',
} as const;

const darkColors = {
  grayLight: 'hsla(0, 0%, 4%, 1)',
  gray: 'hsla(0, 0%, 9%, 1)',
  grayDark: 'hsla(0, 0%, 26%, 1)',
  grayDarker: 'hsla(0, 0%, 60%, 1)',
  green: 'hsla(137, 34%, 53%, 0.9)',
  black: 'hsla(0, 0%, 1000%, 1)',
  white: 'hsla(0, 0%, 0%, 1)',
} as const;

const fontSize = {
  title: 30,
  content: 16,
  label: 14,
} as const;

const roundness = {
  default: 8,
  full: 9999,
} as const;

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 48,
} as const;

const baseTheme = {
  colors: lightColors,
  fontSize,
  roundness,
  spacing,
};
export type ITheme = typeof lightTheme | typeof darkTheme;

export const lightTheme = baseTheme;
export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
};
