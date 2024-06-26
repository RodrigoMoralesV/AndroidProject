// El tipado de los tipos de datos que llegan de la api, un tipado para canciones, albumes, artistas y playlists.

// Este tipado no me lo invente yo, la misma api lo otorga al llamar un metodo de esta.

export type SongType = {
  type: "SONG"
  videoId: string
  name: string
  artist: {
    artistId: string | null
    name: string
  }
  album: {
    albumId: string
    name: string
  } | null
  duration: number | null
  thumbnails: {
    url: string
    width: number
    height: number
  }[]
}

export type AlbumType = {
  type: "ALBUM"
    albumId: string
    playlistId: string
    name: string
    artist: {
        artistId: string | null
        name: string
    }
    year: number | null
    thumbnails: {
        url: string
        width: number
        height: number
    }[]
}

export type ArtistType = {
  artistId: string
  name: string
  type: "ARTIST"
  thumbnails: {
    url: string
    width: number
    height: number
  }[]
}

export type PlaylistType = {
  type: "PLAYLIST"
    playlistId: string
    name: string
    artist: {
        artistId: string | null
        name: string
    }
    thumbnails: {
        url: string
        width: number
        height: number
    }[]
}

// Este tipo es de la navegacion por Stack

export type StackParamList = {
  Home: undefined
  Albums: undefined
  AlbumDetails: { albumId: string }
  Artists: undefined
  ArtistDetails: { artistId: string }
}