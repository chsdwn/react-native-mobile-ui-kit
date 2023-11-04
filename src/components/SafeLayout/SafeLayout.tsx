import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

type Props = {
  style: ViewProps['style'];
  children: React.ReactNode;
};
export const SafeLayout = ({ style, children }: Props) => {
  const styles = useStyles(styleSheet);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: { flex: 1, backgroundColor: theme.colors.white },
}));
