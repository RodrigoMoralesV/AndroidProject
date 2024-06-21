import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './navigation/TabNavigation/TabNavigator';

export default function Main() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
