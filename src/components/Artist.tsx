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
      <StyledText textBold textXL>{artistName}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  artistImage: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
    marginVertical: 15,
  }
})