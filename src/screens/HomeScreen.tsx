import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { colors } from '../config/theme/appTheme'
import { ContainerMain } from '../components/ContainerMain'
import { Song } from '../components/Song'
import { SongGrid } from '../components/grids/SongGrid'
import { AlbumList } from '../components/lists/AlbumList'
import { Album } from '../components/Album'
import { PlaylistList } from '../components/lists/PlaylistList'
import { Playlist } from '../components/Playlist'
import { ArtistList } from '../components/lists/ArtistList'
import { Artist } from '../components/Artist'

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

const playlists = [
  {
    image: [
      'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
      'https://pbs.twimg.com/media/GQxTbUXbkAAul_7?format=jpg&name=4096x4096'
    ],
    name: 'Playlists 1'
  },
  {
    image: [
      'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
      'https://pbs.twimg.com/media/GQxTbUXbkAAul_7?format=jpg&name=4096x4096'
    ],
    name: 'Playlists 2'
  },
  {
    image: [
      'https://guiltygear.wiki.gg/images/8/88/ExtrasCover.jpg',
      'https://pbs.twimg.com/media/GQxTbUXbkAAul_7?format=jpg&name=4096x4096'
    ],
    name: 'Playlists 3'
  },
]

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

export const HomeScreen = () => {
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
          <AlbumList
            data={albums}
            RenderItem={(item) => (
              <Album
                albumCover={item.image}
                albumTitle={item.name}
                albumYear={item.year}
              />
            )}
          />
          <ArtistList
            data={artists}
            RenderItem={(item) => (
              <Artist
                artistName={item.name}
                artistPhoto={item.image}
              />
            )}
          />
          <PlaylistList
            data={playlists}
            RenderItem={(item) => (
              <Playlist
                playlistCovers={item.image}
                playlistTitle={item.name}
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
