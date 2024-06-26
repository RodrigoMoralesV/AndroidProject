import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { AlbumsScreen } from "../../screens/AlbumsScreen";
import { AlbumDetailsScreen } from "../../screens/AlbumDetailsScreen";
import { ArtistsScreen } from "../../screens/ArtistsScreen";
import { ArtistDetailsScreen } from "../../screens/ArtistDetailsScreen";
import { HomeScreen } from '../../screens/HomeScreen'

// Tipado
import { StackParamList } from '../../types'

const Stack = createStackNavigator<StackParamList>()

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
      <Stack.Screen name="ArtistDetails" component={ArtistDetailsScreen} />
    </Stack.Navigator>
  )
}

export const AlbumStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={AlbumsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
    </Stack.Navigator>
  )
}

export const ArtistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Artists" component={ArtistsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ArtistDetails" component={ArtistDetailsScreen} />
    </Stack.Navigator>
  )
}