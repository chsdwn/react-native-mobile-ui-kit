import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';

import { useStyles, useTheme } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

export interface TextInputProps extends RNTextInputProps {
  loading?: boolean;
}

export const TextInput = ({
  secureTextEntry,
  style,
  loading = false,
  ...rest
}: TextInputProps) => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  const [showPassword, setShowPassword] = useState(secureTextEntry || false);

  const handleShowPress = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        secureTextEntry={showPassword}
        style={styles.input}
        placeholderTextColor={theme.colors.grayDark}
        {...rest}
      />
      {secureTextEntry && (
        <Pressable onPress={handleShowPress} style={styles.showBtn}>
          <Text style={styles.showBtnTitle}>
            {showPassword ? 'Show' : 'Hide'}
          </Text>
        </Pressable>
      )}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={theme.colors.grayDark} />
        </View>
      )}
    </View>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.grayDark,
    backgroundColor: theme.colors.grayLight,
    borderRadius: theme.roundness.default,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: theme.spacing.md,
    paddingRight: 0,
    fontSize: theme.fontSize.content,
    flex: 1,
    color: theme.colors.black,
  },
  showBtn: {
    marginRight: theme.spacing.md,
    marginLeft: theme.spacing.sm,
  },
  showBtnTitle: {
    color: theme.colors.green,
    fontSize: theme.fontSize.content,
  },
  loadingContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
  },
}));
