import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'

import { StyledText } from './StyledText'

// Tipado del componente
interface AlbumProps {
  albumCover?: string
  albumTitle?: string
  albumYear?: number | null
  onPress?: () => void
}

export const Album: React.FC<AlbumProps> = (props) => {
  const { albumCover, albumTitle, albumYear, onPress } = props

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: albumCover }}
        style={styles.albumStyles}
      />
      <View style={styles.albumDetails}>
        {/* Arreglar el componente para que no exceda el ancho maximo del view */}
        <StyledText textXL textBold ellipsizeMode='tail' numberOfLines={1} >{albumTitle}</StyledText>
        <StyledText textM textGray>{albumYear}</StyledText>
      </View>
    </Pressable>
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