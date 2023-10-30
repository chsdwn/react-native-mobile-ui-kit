import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from 'react-native';

import { theme } from '@/config/theme';

export const TextInput = ({
  secureTextEntry,
  style,
  ...rest
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry || false);

  const handleShowPress = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        secureTextEntry={showPassword}
        style={styles.input}
        {...rest}
      />
      {secureTextEntry && (
        <Pressable onPress={handleShowPress} style={styles.showBtn}>
          <Text style={styles.showBtnTitle}>
            {showPassword ? 'Show' : 'Hide'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  showBtn: {
    marginRight: theme.spacing.md,
    marginLeft: theme.spacing.sm,
  },
  showBtnTitle: {
    color: theme.colors.green,
    fontSize: theme.fontSize.content,
  },
});
