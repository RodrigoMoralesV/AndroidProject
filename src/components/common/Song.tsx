import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface SongProps {
  songArtist?: string
  songCover?: string
  songLength?: string
  songName?: string
}

// Funcion para formatear la duracion de la cancion en minutos:segundos
const formatTime = (seconds: any) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

export const Song: React.FC<SongProps> = (props) => {
  const { songArtist, songCover, songName, songLength } = props

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: songCover }}
        style={styles.imageStyles}
        resizeMode='cover'
      />
      <View style={styles.songDetails}>
        <StyledText textWhite textBold textL>{songName}</StyledText>
        <View style={styles.songDetailsBottom}>
          <StyledText textGray textBold textM>{songArtist}</StyledText>
          <StyledText textGray textS>{formatTime(songLength)}</StyledText>
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
    overflow: 'visible',
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
