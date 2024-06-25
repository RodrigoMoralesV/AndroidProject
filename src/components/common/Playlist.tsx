import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface PlaylistProps {
  playlistCovers?: string
  playlistTitle?: string
}

export const Playlist: React.FC<PlaylistProps> = (props) => {
  const { playlistCovers, playlistTitle } = props

  return (
    <View style={styles.container}>
      <View style={styles.playlistGrid}>
        <Image
          source={{ uri: playlistCovers }}
          style={styles.playlistImage}
        />
      </View>
      <StyledText textXL textBold>{playlistTitle}</StyledText>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    marginHorizontal: 5,
  },
  playlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 125,
    height: 125,
  },
  playlistImage: {
    width: 62.5,
    height: 62.5,
  },
})
