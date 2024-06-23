import React from 'react'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import { HomeScreen } from '../../screens/HomeScreen'
import { AlbumsScreen } from '../../screens/AlbumsScreen'
import { SearchScreen } from '../../screens/SearchScreen'
import { PlaylistsScreen } from '../../screens/PlaylistsScreen'
import { ArtistsScreen } from '../../screens/ArtistsScreen'

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
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
        component={ArtistsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='account-music' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}
