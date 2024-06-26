import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Album } from '../components/common/Album'
import { AlbumGrid } from '../components/grids/AlbumGrid'
import { colors } from '../config/theme/appTheme'

// Tipado de la api
import { AlbumType } from '../types'

// Datos de la api
import { SearchAlbum } from '../api/albums/SearchAlbum'

export const AlbumsScreen = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([])

  useEffect(() => {
    const getAlbums = async () => {
      const resultsAlbums = await SearchAlbum("The 1975")
      setAlbums(resultsAlbums as AlbumType[])
    }
    getAlbums()
  })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <AlbumGrid
          data={albums}
          RenderItem={(item) => (
            <Album
              albumCover={item.thumbnails[0].url}
              albumTitle={item.name}
              albumYear={item.year}
            />
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary1,
    flex: 1,
    alignItems: 'center',
  },
})