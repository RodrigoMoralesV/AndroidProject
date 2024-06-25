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
      <View>
        <StyledText textBold textXL ellipsizeMode='tail' numberOfLines={1}>{artistName}</StyledText>
      </View>
    </View>
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