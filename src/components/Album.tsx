import React from 'react'

import { StyledText } from './StyledText'
import { Image, StyleSheet, View } from 'react-native'

interface AlbumProps {
  albumCover?: string
  albumTitle?: string
  albumYear?: string
}

export const Album: React.FC<AlbumProps> = (props) => {
  const { albumCover, albumTitle, albumYear } = props

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: albumCover }}
        style={styles.albumStyles}
      />
      <View style={styles.albumDetails}>
        <StyledText textXL textBold>{albumTitle}</StyledText>
        <StyledText textM textGray>{albumYear}</StyledText>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  albumDetails: {
    rowGap: 18,
  },
  albumStyles: {
    borderRadius: 5,
    height: 150,
    width: 150,
  },
  container: {
    rowGap: 12,
  }
})