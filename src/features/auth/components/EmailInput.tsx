import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput } from '@/components';
import { theme } from '@/config/theme';

export const EmailInput = () => {
  return (
    <TextInput
      placeholder="Email"
      placeholderTextColor={theme.colors.grayDark}
      textContentType="emailAddress"
      style={styles.input}
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
