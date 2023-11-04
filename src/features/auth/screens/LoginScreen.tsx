import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Button, SafeLayout } from '@/components';
import { useStyles } from '@/hooks';
import { createStyleSheet } from '@/hooks/useStyles';
import { EmailInput, PasswordInput } from '../components';

const isIOS = Platform.OS === 'ios';

export const LoginScreen = () => {
  const styles = useStyles(styleSheet);

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
            <EmailInput />
            <PasswordInput />
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
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.black,
  },
  inputContainer: {
    flex: 1,
    marginVertical: theme.spacing.lg,
  },
  forgotPasswordButton: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));
