import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

// Para el color del fondo
import { colors } from '../config/theme/appTheme'

// Componentes a usar
import { StyledText } from '../components/common/StyledText'
import { SongGrid } from '../components/grids/SongGrid'
import { Song } from '../components/common/Song'

// Funciones para buscar datos en la api
import { SearchAlbumId } from '../api/albums/SearchAlbumId'

// Tipado de los datos de la api
import { AlbumType } from '../types'

// Tipado de la navegacion
import { StackParamList } from '../types'

type AlbumDetailsProps = NativeStackScreenProps<StackParamList, 'AlbumDetails'>

export const AlbumDetailsScreen: React.FC<AlbumDetailsProps> = ({ route }) => {
  const { albumId } = route.params

  const [album, setAlbum] = useState<AlbumType[]>([])

  useEffect(() => {
    const getAlbumDetails = async () => {
      const albumData = await SearchAlbumId(albumId)
      // No se por que no funciona, talvez algo de tipado
      setAlbum(albumData as AlbumType[])
    }
    getAlbumDetails()
  }, [albumId])

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image source={{ uri: album.thumbnails }} style={styles.albumCover} />
        <StyledText textXL textBold>{album.name}</StyledText>
        <StyledText textM textGray>{album.year}</StyledText>

        <SongGrid
          data={album}
          RenderItem={(item) => (
            <Song
              songArtist={item.artist.name}
              songCover={item.thumbnails[0].url}
              // songLength={item.name.duration?.toString() || 'N/A'}
              songName={item.name}
            />
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary1,
    paddingVertical: 40,
  },
  container: {
    paddingHorizontal: 20,
  },
  albumCover: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
