import { StyleSheet, Text, View } from 'react-native';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Mobile UI kit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
