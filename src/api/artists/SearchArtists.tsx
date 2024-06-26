import { ytmusic } from "../ytmusic"

// Funcion que me permite buscar Artistas con el metodo searchArtists de ytmusic
export const SearchArtists = async (query: string) => {
  await ytmusic.initialize()
  const searchArtistsResults = await ytmusic.searchArtists(query)
  console.log(searchArtistsResults)
  // Filtrado para que solo traiga datos de artistas
  return searchArtistsResults.filter((item: any) => item.type === 'ARTIST').slice(0, 6)
}