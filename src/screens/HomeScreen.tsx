import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// Para el color del fondo
import { colors } from '../config/theme/appTheme'

// Componentes a usar
import { Album } from '../components/common/Album'
import { AlbumList } from '../components/lists/AlbumList'
import { Artist } from '../components/common/Artist'
import { ArtistList } from '../components/lists/ArtistList'
import { ContainerMain } from '../components/common/ContainerMain'
import { Playlist } from '../components/common/Playlist'
import { PlaylistList } from '../components/lists/PlaylistList'
import { Song } from '../components/common/Song'
import { SongGrid } from '../components/grids/SongGrid'

// Funciones para buscar datos en la api, retorna una lista
import { SearchAlbum } from '../api/albums/SearchAlbum'
import { SearchArtists } from '../api/artists/SearchArtists'
import { SearchPlaylist } from '../api/playlists/SearchPlaylist'
import { SearchSong } from '../api/songs/SearchSong'

// Tipado de los datos de la api
import { AlbumType, ArtistType, PlaylistType, SongType } from '../types'

export const HomeScreen = () => {
  const [songs, setSongs] = useState<SongType[]>([])
  const [albums, setAlbums] = useState<AlbumType[]>([])
  const [artists, setArtists] = useState<ArtistType[]>([])
  const [playlists, setPlaylists] = useState<PlaylistType[]>([])

  useEffect(() => {
    const getSongs = async () => {
      const resultsSongs = await SearchSong("Burn My Dread")
      setSongs(resultsSongs as SongType[])
    }
    getSongs()

    const getAlbums = async () => {
      const resultsAlbums = await SearchAlbum("Persona")
      setAlbums(resultsAlbums as AlbumType[])
    }
    getAlbums()

    const getArtists = async () => {
      const resultsArtists = await SearchArtists("Queen")
      setArtists(resultsArtists as ArtistType[])
    }
    getArtists()

    const getPlaylists = async () => {
      const resultsPlaylists = await SearchPlaylist("canciones que usa Adrelina")
      setPlaylists(resultsPlaylists as PlaylistType[])
    }
    getPlaylists()
  }, [])

  return (
    <ScrollView style={styles.background}>
      <ContainerMain>
        <View style={{ rowGap: 30 }}>
          <SongGrid
            data={songs}
            RenderItem={(item) => (
              <Song
                songArtist={item.artist.name}
                songCover={item.thumbnails[0].url}
                songLength={item.duration?.toString() || 'N/A'}
                songName={item.name}
              />
            )}
          />
          <AlbumList
            data={albums}
            RenderItem={(item) => (
              <Album
                albumCover={item.thumbnails[0].url}
                albumTitle={item.name}
                albumYear={item.year}
              />
            )}
          />
          <ArtistList
            data={artists}
            RenderItem={(item) => (
              <Artist
                artistName={item.name}
                artistPhoto={item.thumbnails[0].url}
              />
            )}
          />
          <PlaylistList
            data={playlists}
            RenderItem={(item) => (
              <Playlist
                playlistCovers={item.thumbnails[0].url}
                playlistTitle={item.name}
              />
            )}
          />
        </View>
      </ContainerMain>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary1,
    paddingVertical: 40,
  }
})
