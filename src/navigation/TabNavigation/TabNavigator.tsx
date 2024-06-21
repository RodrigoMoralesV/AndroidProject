import React from 'react'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import { Home } from '../../screens/Home'
import { Albums } from '../../screens/Albums'
import { Playlists } from '../../screens/Playlists'
import { Artists } from '../../screens/Artists'

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
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='album' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Playlists"
        component={Playlists}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='playlist-music' color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Artists"
        component={Artists}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunity name='account-music' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}
