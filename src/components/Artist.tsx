import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface ArtistProps {
  artistName: string
  artistPhoto: string
}

export const Artist: React.FC<ArtistProps> = (props) => {
  const { artistName, artistPhoto } = props

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: artistPhoto }}
        style={styles.artistImage}
      />
      <StyledText textBold textL>{artistName}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  artistImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  }
})