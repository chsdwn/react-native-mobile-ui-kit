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
import { EmailInput, PasswordInput, SignupHeader } from '../components';

const isIOS = Platform.OS === 'ios';

export const SignupScreen = () => {
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
          <SignupHeader />

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={theme.colors.grayDark}
              textContentType="name"
              style={styles.input}
            />
            <EmailInput />
            <PasswordInput />
          </View>

          <View style={styles.confirmationContainer}>
            <View style={styles.confirmationCheckbox} />
            <Text style={styles.confirmationText}>
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View>

          <View>
            <Button title="Sign Up" />
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
  inputContainer: {
    marginVertical: theme.spacing.lg,
  },
  input: {
    backgroundColor: theme.colors.grayLight,
    marginBottom: theme.spacing.md,
    borderColor: theme.colors.gray,
    borderWidth: 1,
  },
  confirmationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  confirmationCheckbox: {
    width: theme.spacing.md,
    height: theme.spacing.md,
    borderRadius: 4,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.grayLight,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
  },
  confirmationText: {
    color: theme.colors.grayDarker,
    fontSize: theme.fontSize.label,
  },
  forgotPasswordButton: {
    marginTop: theme.spacing.md,
  },
});
