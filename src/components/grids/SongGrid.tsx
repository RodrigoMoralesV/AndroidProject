import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StyledText } from '../common/StyledText'

interface SongGridProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const SongGrid = <T extends any>(props: SongGridProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 10 }}>
        <StyledText textXXL>Recently Listened</StyledText>
      </View>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={styles.items}
          >
            {RenderItem(item)}
          </View>
        )
      })}
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  items: {
    padding: 5,
    width: `100%`
  }
})