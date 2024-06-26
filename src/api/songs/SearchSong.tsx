import { ytmusic } from '../ytmusic'

// Funcion que me permite buscar Canciones con el metodo searchSongs de ytmusic
export const SearchSong = async (query: string) => {
  await ytmusic.initialize()
  const searchSongResults = await ytmusic.searchSongs(query)
  console.log(searchSongResults)
  // Filtrar datos retornados por la api para que solo sean de tipo Song
  return searchSongResults.filter((item: any) => item.type === 'SONG').slice(0, 4)
}
