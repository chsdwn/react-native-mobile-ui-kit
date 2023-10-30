import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button, SafeLayout, TextInput } from '@/components';
import { theme } from '@/config/theme';

const isIOS = Platform.OS === 'ios';

export const LoginScreen = () => {
  return (
    <SafeLayout style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={isIOS ? 'padding' : 'height'}
        keyboardVerticalOffset={isIOS ? 40 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.title}>Log In</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={theme.colors.grayDark}
              textContentType="emailAddress"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              style={[styles.input, styles.passwordInput]}
              placeholderTextColor={theme.colors.grayDark}
            />
          </View>

          <View>
            <Button title="Log In" />
            <Button
              title="Forgot your password?"
              variant="text"
              style={styles.forgotPasswordButton}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.spacing.md,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    marginVertical: theme.spacing.lg,
  },
  input: {
    backgroundColor: theme.colors.grayLight,
  },
  passwordInput: {
    marginTop: theme.spacing.md,
    color: theme.colors.grayDark,
  },
  forgotPasswordButton: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
});
