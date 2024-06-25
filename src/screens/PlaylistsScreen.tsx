import React from 'react'
import { StyleSheet, View } from 'react-native'

import { colors } from '../config/theme/appTheme'
import { Playlist } from '../components/common/Playlist'
import { PlaylistGrid } from '../components/grids/PlaylistGrid'

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

export const PlaylistsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <PlaylistGrid
          data={playlists}
          RenderItem={(item) => (
            <Playlist
              playlistCovers={item.image}
              playlistTitle={item.name}
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
    alignItems: 'center'
  }
})