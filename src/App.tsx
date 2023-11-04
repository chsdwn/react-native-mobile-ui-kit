import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useThemeVariant } from '@/hooks';
import { BaseRoute } from '@/routes';

export const App = () => {
  const isDark = useThemeVariant() === 'dark';

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        <BaseRoute />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
