import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { ArtistsGrid } from '../grids/ArtistsGrid'
import { StyledText } from '../common/StyledText'

interface ArtistListProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const ArtistList = <T extends any>(props: ArtistListProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      <StyledText textXL>Similar artists</StyledText>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <ArtistsGrid
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
  },
})