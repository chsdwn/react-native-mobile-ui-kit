import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PrivateBottomBar } from '@/components';
import {
  ContentScreen,
  FeedModalScreen,
  FeedScreen,
  MarketScreen,
  PostDetailsScreen,
} from '@/features/feed/screens';
import { PrivateBottomBarParamList, PrivateStackParamList } from '@/types';

const BottomBar = createBottomTabNavigator<PrivateBottomBarParamList>();

const FeedBottomNavigation = () => {
  return (
    <BottomBar.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <PrivateBottomBar {...props} />}
    >
      <BottomBar.Screen name="Feed" component={FeedScreen} />
      <BottomBar.Screen name="Content" component={ContentScreen} />
      <BottomBar.Screen name="Market" component={MarketScreen} />
      <BottomBar.Screen name="PostDetails" component={PostDetailsScreen} />
    </BottomBar.Navigator>
  );
};

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export const PrivateRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FeedBottomNavigation"
        component={FeedBottomNavigation}
      />
      <Stack.Screen name="Modal" component={FeedModalScreen} />
    </Stack.Navigator>
  );
};
