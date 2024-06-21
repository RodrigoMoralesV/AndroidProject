import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StyledText } from '../StyledText'

interface AlbumGridProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const AlbumGrid = <T extends any>(props: AlbumGridProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{ padding: 8, width: `${100 / 2}%` }}
          >
            {RenderItem(item)}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }
})