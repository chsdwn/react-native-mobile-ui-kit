import { BackHandler, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { PublicStackNavigationProp } from '@/types';

export const SignupHeader = () => {
  const styles = useStyles(styleSheet);
  const navigation = useNavigation<PublicStackNavigationProp>();

  const handleClosePress = () => {
    BackHandler.exitApp();
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={handleClosePress} style={styles.btn}>
        <Text style={styles.closeBtnTitle}>X</Text>
      </Pressable>

      <Text style={styles.title}>Sign Up</Text>

      <Pressable
        onPress={handleLoginPress}
        style={[styles.btn, styles.loginBtn]}
      >
        <Text style={styles.loginBtnTitle}>Login</Text>
      </Pressable>
    </View>
  );
};

const styleSheet = createStyleSheet(({ theme }) => ({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.black,
  },
  btn: {
    flex: 1,
    padding: theme.spacing.xs,
  },
  closeBtnTitle: {
    color: theme.colors.grayDark,
    fontSize: theme.fontSize.content,
    fontWeight: '600',
  },
  loginBtn: {
    alignItems: 'flex-end',
  },
  loginBtnTitle: {
    fontSize: theme.fontSize.content,
    color: theme.colors.green,
  },
}));
