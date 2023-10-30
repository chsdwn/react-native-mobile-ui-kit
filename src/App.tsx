import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { BaseRoute } from '@/routes';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
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
