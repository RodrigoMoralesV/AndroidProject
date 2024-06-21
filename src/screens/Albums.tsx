import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Album } from '../components/Album'
import { AlbumGrid } from '../components/grids/AlbumGrid'
import { colors } from '../config/theme/appTheme'

const albums = [
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    year: '2023'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'The Town Inside Me',
    year: '2023'
  },
]

export const Albums = () => {
  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary1,
    flex: 1,
  }
})