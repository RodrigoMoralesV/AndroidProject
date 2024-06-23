import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './navigation/TabNavigation/TabNavigator';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

import { colors } from './config/theme/appTheme';

export default function Main() {
  return (
    <>
      <ExpoStatusBar style='auto' />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
