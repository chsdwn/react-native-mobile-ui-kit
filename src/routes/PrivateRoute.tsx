import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PrivateBottomBar } from '@/components';
import { ContentScreen, FeedScreen } from '@/features/feed/screens';
import { PrivateBottomBarParamList } from '@/types';

const BottomBar = createBottomTabNavigator<PrivateBottomBarParamList>();

export const PrivateRoute = () => {
  return (
    <BottomBar.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <PrivateBottomBar {...props} />}
    >
      <BottomBar.Screen name="Feed" component={FeedScreen} />
      <BottomBar.Screen name="Content" component={ContentScreen} />
    </BottomBar.Navigator>
  );
};
