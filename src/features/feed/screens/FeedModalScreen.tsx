import React from 'react';
import { Text, View } from 'react-native';

import { Button, SafeLayout } from '@/components';
import { useStyles, useTheme } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { SkiaShadow } from 'react-native-skia-shadow';

export const FeedModalScreen = () => {
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <SkiaShadow
        color={theme.colors.blueDark}
        blur={20}
        dx={0}
        dy={0}
        borderRadius={theme.roundness.default}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Congratulations!</Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            pretium quam. Quisque quis tempus ligula, eu ullamcorper ante. Donec
            et dolor ac libero malesuada imperdiet placerat eget ex. Nullam
            euismod, dui nec accumsan rutrum, diam nulla maximus elit, sit amet
            tempor elit nulla sed ligula. Sed accumsan congue pretium. Donec
            feugiat mi sit amet dolor dignissim, ac auctor risus accumsan. Nam
            magna nulla, mollis et efficitur non, commodo at urna.
          </Text>

          <Button title="Confirm" style={styles.confirmBtn} />
          <Button title="Hide" variant="text" style={styles.hideBtn} />
        </View>
      </SkiaShadow>
    </View>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    borderRadius: theme.roundness.default,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
  },
  title: {
    color: theme.colors.black,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    color: theme.colors.grayDarker,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: theme.spacing.md,
  },
  confirmBtn: {
    marginTop: theme.spacing.lg,
  },
  hideBtn: {
    marginTop: theme.spacing.md,
  },
}));
