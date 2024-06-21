import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Album } from '../components/Album'
import { colors } from '../config/theme/appTheme'
import { ContainerMain } from '../components/ContainerMain'
import { Song } from '../components/Song'
import { Playlist } from '../components/Playlist'
import { Artist } from '../components/Artist'
import { SongGrid } from '../components/grids/SongGrid'

const songs = [
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Extras',
    artist: 'Arc System Works',
    length: '5:38',
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'The Town Inside Me',
    artist: 'Arc System Works',
    length: '4:18',
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'The Town Inside Me',
    artist: 'Arc System Works',
    length: '4:18',
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'The Town Inside Me',
    artist: 'Arc System Works',
    length: '4:18',
  }
]

const artists = [
  {
    image: 'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
    name: 'Elphelt'
  },
  {
    image: 'https://static.wikia.nocookie.net/guilty-gear/images/d/df/Ggst_the_town_inside_me_cover.png/revision/latest/scale-to-width-down/1000?cb=20230917020623',
    name: 'Bridget'
  }
]

export const Home = () => {
  return (
    <ScrollView style={styles.background}>
      <ContainerMain>
        <View style={{ rowGap: 30 }}>
          <SongGrid
            data={songs}
            RenderItem={(item) => (
              <Song
                songArtist={item.artist}
                songCover={item.image}
                songLength={item.length}
                songName={item.name}
              />
            )}
          />
        </View>
      </ContainerMain>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary1,
    paddingVertical: 40,
  }
})
