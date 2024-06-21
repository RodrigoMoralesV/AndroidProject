import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StyledText } from '../StyledText'

interface SongGridProps<T> {
  data: T[]
  RenderItem(item: T): React.ReactNode
}

export const SongGrid = <T extends any>(props: SongGridProps<T>) => {
  const { data, RenderItem } = props

  return (
    <View style={styles.container}>
      <StyledText textXXL>Recently Listened</StyledText>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            style={{ width: `80%`, padding: 5 }}
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
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
  }
})