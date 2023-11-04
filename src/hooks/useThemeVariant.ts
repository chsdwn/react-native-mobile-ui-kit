import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

type Variant = 'system' | 'dark' | 'light';

export const useThemeVariant = (variant: Variant = 'system') => {
  const isDark = useColorScheme() === 'dark';

  const themeVariant = useMemo(() => {
    if (variant === 'system') {
      return isDark ? 'dark' : 'light';
    }
    return variant;
  }, [isDark, variant]);

  return themeVariant;
};
