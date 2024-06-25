import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface AlbumProps {
  albumCover?: string
  albumTitle?: string
  albumYear?: number | null
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
        <StyledText textXL textBold ellipsizeMode='tail' numberOfLines={1} >{albumTitle}</StyledText>
        <StyledText textM textGray>{albumYear}</StyledText>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  albumDetails: {
    rowGap: 10,
    maxWidth: '70%',
  },
  albumStyles: {
    borderRadius: 5,
    height: 125,
    width: 125,
  },
  container: {
    marginHorizontal: 5,
    rowGap: 10,
  }
})