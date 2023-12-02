import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { PrivateBottomBarNavigationProp } from '@/types';

export const PrivateBottomBar = (props: BottomTabBarProps) => {
  const styles = useStyles(styleSheet);
  const navigation = useNavigation<PrivateBottomBarNavigationProp>();

  const activeRoute = props.state.history.at(-1)?.key?.split('-')?.[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomBar}>
        <Pressable
          onPress={() => navigation.navigate('Feed')}
          style={[styles.tab, activeRoute === 'Feed' && styles.activeTab]}
        />
        <Pressable
          onPress={() => navigation.navigate('Content')}
          style={[styles.tab, activeRoute === 'Content' && styles.activeTab]}
        />
        <Pressable
          onPress={() => navigation.navigate('Market')}
          style={[styles.tab, activeRoute === 'Market' && styles.activeTab]}
        />
        <Pressable style={[styles.tab]} />
        <Pressable style={[styles.tab]} />
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
