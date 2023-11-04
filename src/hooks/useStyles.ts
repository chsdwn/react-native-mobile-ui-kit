import { useMemo } from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

import { ITheme } from '@/config/theme';
import { useTheme } from './useTheme';
import { useThemeVariant } from './useThemeVariant';

type Args = {
  theme: ITheme;
  isDark: boolean;
  isPortrait: boolean;
  width: number;
  height: number;
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
type Styles<T> = (args: Args) => T | NamedStyles<T>;

export const createStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  create: Styles<T>
) => create;

export const useStyles = <T>(stylesFn: Styles<T>) => {
  const theme = useTheme();
  const isDark = useThemeVariant() === 'dark';
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const styles = useMemo(() => {
    return StyleSheet.create(
      stylesFn({ theme, isDark, isPortrait, width, height })
    );
  }, [theme, isDark, isPortrait, width, height, stylesFn]);

  return styles;
};
