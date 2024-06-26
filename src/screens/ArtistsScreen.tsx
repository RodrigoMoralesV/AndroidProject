import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Album } from '../components/common/Album'
import { AlbumGrid } from '../components/grids/AlbumGrid'
import { colors } from '../config/theme/appTheme'

// Tipado de la api
import { ArtistType } from '../types'

// Datos de la api
import { SearchArtists } from '../api/artists/SearchArtists'

export const ArtistsScreen = () => {
  const [artists, setArtists] = useState<ArtistType[]>([])

  useEffect(() => {
    const getArtists = async () => {
      const resultsAlbums = await SearchArtists("Queen")
      setArtists(resultsAlbums as ArtistType[])
    }
    getArtists()
  })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <AlbumGrid
          data={artists}
          RenderItem={(item) => (
            <Album
              albumCover={item.thumbnails[0].url}
              albumTitle={item.name}
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