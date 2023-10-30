import { theme } from '@/config/theme';
import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewProps,
} from 'react-native';

type Props = PressableProps & {
  title: string;
  variant?: 'default' | 'text';
};
export const Button = ({ title, variant, style, ...rest }: Props) => {
  const isText = variant === 'text';

  return (
    <Pressable
      style={[
        styles.button,
        isText && styles.textButton,
        style as ViewProps['style'],
      ]}
      {...rest}
    >
      <Text style={[styles.title, isText && styles.textButtonTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.green,
    borderRadius: theme.roundness.full,
  },
  textButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fontSize.content,
    textAlign: 'center',
    fontWeight: '600',
  },
  textButtonTitle: {
    color: theme.colors.green,
  },
});
