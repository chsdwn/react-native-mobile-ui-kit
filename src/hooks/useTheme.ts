import { useMemo } from 'react';

import { darkTheme, lightTheme } from '@/config/theme';
import { useThemeVariant } from './useThemeVariant';

export const useTheme = () => {
  const themeVariant = useThemeVariant();

  const theme = useMemo(() => {
    if (themeVariant === 'dark') return darkTheme;
    return lightTheme;
  }, [themeVariant]);

  return theme;
};
