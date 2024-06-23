import React from 'react'
import { StyleSheet, View } from 'react-native'

interface PlaylistGridProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const PlaylistGrid = <T extends any>(props: PlaylistGridProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{ padding: 8 }}
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