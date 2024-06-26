import { ytmusic } from "../ytmusic";

// Funcion que me permite buscar playlist con el metodo searchPlaylists de ytmusic
export const SearchPlaylist = async (query: string) => {
  await ytmusic.initialize()
  const searchPlaylistResults = await ytmusic.searchPlaylists(query)
  // Filtro para que solo me traiga items de tipo Playlist, solo traigo 6 para hacer prueba
  return searchPlaylistResults.filter((item: any) => item === 'PLAYLIST').slice(0, 6)
}