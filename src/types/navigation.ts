import { RouteProp } from '@react-navigation/native';
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
  Market: undefined;
  PostDetails: { id: string };
};

export type PrivateBottomBarNavigationProp =
  BottomTabNavigationProp<PrivateBottomBarParamList>;

export type PrivateStackParamList = {
  FeedBottomNavigation: undefined;
  Modal: undefined;
};

export type PrivateStackNavigationProp =
  NativeStackNavigationProp<PrivateStackParamList>;

export type PostDetailsRouteProp = RouteProp<
  PrivateBottomBarParamList,
  'PostDetails'
>;
