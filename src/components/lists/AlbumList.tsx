import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { StyledText } from '../StyledText'
import { AlbumGrid } from '../grids/AlbumGrid'

interface AlbumListProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const AlbumList = <T extends any>(props: AlbumListProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      <StyledText textXL>Albums for you</StyledText>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.albumList}
        showsHorizontalScrollIndicator={false}
      >
        <AlbumGrid
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
  },
  albumList: {
    columnGap: 35,
  }
})