import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

interface PlaylistProps {
  playlistCovers?: string[]
  playlistTitle?: string
}

export const Playlist: React.FC<PlaylistProps> = (props) => {
  const { playlistCovers = [], playlistTitle } = props

  // Desectructurar las portadas que se pasan por medio del componente
  const filledPlaylistCovers = [...playlistCovers]

  // Rellenar imagenes que faltan
  while (filledPlaylistCovers.length < 4) {
    filledPlaylistCovers.push(...playlistCovers)
  }

  return (
    <View style={styles.container}>
      <View style={styles.playlistGrid}>
        {/* Funcion que retorna la grilla con imagenes */}
        {filledPlaylistCovers.slice(0, 4).map((cover, index) => (
          <Image
            key={index}
            source={{ uri: cover }}
            style={styles.playlistImage}
          />
        ))}
      </View>
      <View style={styles.playlistDetails}>
        <StyledText textXL textBold>{playlistTitle}</StyledText>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 12,
  },
  playlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 150,
    height: 150,
  },
  playlistImage: {
    width: 75,
    height: 75,
  },
  playlistDetails: {
    rowGap: 18,
  },
})
