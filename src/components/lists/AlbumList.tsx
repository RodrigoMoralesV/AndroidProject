import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { StyledText } from '../common/StyledText'
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
    rowGap: 10,
  }
})