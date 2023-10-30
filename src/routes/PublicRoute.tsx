import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SignupScreen } from '@/features/auth/screens';
import { PublicStackParamList } from '@/types';

const Stack = createNativeStackNavigator<PublicStackParamList>();

export const PublicRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
