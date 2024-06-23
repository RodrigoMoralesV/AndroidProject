import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface SongProps {
  songArtist?: string
  songCover?: string
  songLength?: string
  songName?: string
}

export const Song: React.FC<SongProps> = (props) => {
  const { songArtist, songCover, songName, songLength } = props

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: songCover }}
        style={styles.imageStyles}
      />
      <View style={styles.songDetails}>
        <View>
          <StyledText textWhite textBold textL>{songName}</StyledText>
        </View>
        <View style={styles.songDetailsBottom}>
          <StyledText textGray textBold textM>{songArtist}</StyledText>
          <StyledText textGray textS>{songLength}</StyledText>
        </View>
      </View>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  container: {
    columnGap: 15,
    flexDirection: 'row',
    marginVertical: 10,
  },
  imageStyles: {
    borderRadius: 5,
    height: 50,
    width: 50,
  },
  songDetails: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 10,
  },
  songDetailsBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
