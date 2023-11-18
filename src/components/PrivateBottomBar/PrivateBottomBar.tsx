import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

export const PrivateBottomBar = (_props: BottomTabBarProps) => {
  const styles = useStyles(styleSheet);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomBar}>
        <View style={[styles.tab, styles.activeTab]} />
        <View style={[styles.tab]} />
        <View style={[styles.tab]} />
        <View style={[styles.tab]} />
        <View style={[styles.tab]} />
      </View>
    </SafeAreaView>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    backgroundColor: theme.colors.white,
  },
  bottomBar: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: theme.colors.gray,
    borderTopWidth: 1,
  },
  tab: {
    width: theme.spacing.lg,
    height: theme.spacing.lg,
    borderRadius: theme.roundness.full,
    backgroundColor: theme.colors.gray,
  },
  activeTab: {
    backgroundColor: theme.colors.green,
  },
}));
