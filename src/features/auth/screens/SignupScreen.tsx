import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Button, SafeLayout, TextInput } from '@/components';
import { useStyles, useTheme } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { useUserStore } from '@/store';
import { EmailInput, PasswordInput, SignupHeader } from '../components';

const isIOS = Platform.OS === 'ios';

export const SignupScreen = () => {
  const setAuthenticated = useUserStore((store) => store.setAuthenticated);
  const theme = useTheme();
  const styles = useStyles(styleSheet);

  const handleSignUp = () => {
    setAuthenticated(true);
  };

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
            <Button title="Sign Up" onPress={handleSignUp} />
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

const styleSheet = createStyleSheet(({ theme }) => ({
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
    fontWeight: '400',
    flex: 1,
  },
  forgotPasswordButton: {
    marginTop: theme.spacing.md,
  },
}));
