import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';

export const FeedHeader = () => {
  const styles = useStyles(styleSheet);

  return (
    <View style={styles.header}>
      <Pressable style={styles.btn}>
        <Text style={styles.btnTitle}>Back</Text>
      </Pressable>

      <Text style={styles.title}>Feed</Text>

      <Pressable style={styles.btn}>
        <Text style={styles.btnTitle}>Filter</Text>
      </Pressable>
    </View>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: theme.spacing.xs,
  },
  btnTitle: {
    fontSize: theme.fontSize.content,
    fontWeight: '500',
    color: theme.colors.green,
  },
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: '600',
    color: theme.colors.black,
  },
}));
