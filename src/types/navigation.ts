import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type PublicStackNavigationProp =
  NativeStackNavigationProp<PublicStackParamList>;

export type PrivateBottomBarParamList = {
  Feed: undefined;
  Content: undefined;
};

export type PrivateBottomBarNavigationProp =
  BottomTabNavigationProp<PrivateBottomBarParamList>;
