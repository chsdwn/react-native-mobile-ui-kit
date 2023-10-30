import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type PublicStackNavigationProp =
  NativeStackNavigationProp<PublicStackParamList>;
