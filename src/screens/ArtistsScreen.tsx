import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Artist } from '../components/common/Artist'
import { colors } from '../config/theme/appTheme'
import { ArtistsGrid } from '../components/grids/ArtistsGrid'

const artists = [
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Elphelt'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'Bridget'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'Bridget'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'Bridget'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'Bridget'
  }
]

export const ArtistsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ArtistsGrid
          data={artists}
          RenderItem={(item) => (
            <Artist
              artistName={item.name}
              artistPhoto={item.image}
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