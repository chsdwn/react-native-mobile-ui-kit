import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput } from '@/components';
import { theme } from '@/config/theme';

export const PasswordInput = () => {
  return (
    <TextInput
      placeholder="Password"
      textContentType="password"
      secureTextEntry
      style={styles.input}
      placeholderTextColor={theme.colors.grayDark}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.grayLight,
    marginBottom: theme.spacing.md,
    borderColor: theme.colors.gray,
    borderWidth: 1,
  },
});
