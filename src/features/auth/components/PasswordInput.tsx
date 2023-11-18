import React from 'react';

import { TextInput } from '@/components';
import { useStyles, useTheme } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

export const PasswordInput = () => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  return (
    <TextInput
      placeholder="Password"
      textContentType="password"
      secureTextEntry
      style={styles.input}
    />
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  input: {
    backgroundColor: theme.colors.grayLight,
    marginBottom: theme.spacing.md,
    borderColor: theme.colors.gray,
    borderWidth: 1,
  },
}));
