import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface ArtistProps {
  artistName: string
  artistPhoto: string
  onPress?: () => void
}

export const Artist: React.FC<ArtistProps> = (props) => {
  const { artistName, artistPhoto, onPress } = props

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: artistPhoto }}
        style={styles.artistImage}
      />
      <View>
        <StyledText textBold textXL ellipsizeMode='tail' numberOfLines={1}>{artistName}</StyledText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  artistImage: {
    borderRadius: 100,
    height: 125,
    width: 125,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
    marginHorizontal: 5,
  }
})