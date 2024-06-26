import React from 'react'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import { HomeStack } from '../StackNavigation/StackNavigator'
import { AlbumStack } from '../StackNavigation/StackNavigator'
import { ArtistStack } from '../StackNavigation/StackNavigator'
import { PlaylistsScreen } from '../../screens/PlaylistsScreen'
import { SearchScreen } from '../../screens/SearchScreen'
import { colors } from '../../config/theme/appTheme'

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary1,
        tabBarInactiveBackgroundColor: colors.primary1
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Albums"
        component={AlbumStack}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='album' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='playlist-music' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Artists"
        component={ArtistStack}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='account-music' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}
