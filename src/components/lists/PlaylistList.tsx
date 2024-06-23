import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { StyledText } from '../StyledText'
import { PlaylistGrid } from '../grids/PlaylistGrid'

interface PlaylistListProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const PlaylistList = <T extends any>(props: PlaylistListProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      <StyledText textXL>Playlists you may like</StyledText>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <PlaylistGrid
          data={data}
          RenderItem={RenderItem}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 12,
    marginBottom: 60,
  },
})