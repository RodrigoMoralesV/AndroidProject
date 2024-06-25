import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Album } from '../components/common/Album'
import { AlbumGrid } from '../components/grids/AlbumGrid'
import { colors } from '../config/theme/appTheme'

const albums = [
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    year: '2023'
  },
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    year: '2023'
  },
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    year: '2023'
  },
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    year: '2023'
  },
]

export const AlbumsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <AlbumGrid
          data={albums}
          RenderItem={(item) => (
            <Album
              albumCover={item.image}
              albumTitle={item.name}
              albumYear={item.year}
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary1,
    flex: 1,
    alignItems: 'center',
  },
})