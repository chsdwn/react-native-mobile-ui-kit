import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewProps } from 'react-native';

type Props = {
  style: ViewProps['style'];
  children: React.ReactNode;
};
export const SafeLayout = ({ style, children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});
