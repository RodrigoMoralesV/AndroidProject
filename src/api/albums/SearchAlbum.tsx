import { ytmusic } from "../ytmusic";

// Funcion que me permite buscar albums con el metodo searchAlbums de ytmusic
export const SearchAlbum = async (query: string) => {
  await ytmusic.initialize()
  const searchAlbumResults = await ytmusic.searchAlbums(query)
  console.log(searchAlbumResults)
  // Filtro para que solo me traiga items de tipo Album, solo traigo 6 para hacer prueba
  return searchAlbumResults.filter((item: any) => item.type === 'ALBUM').slice(0, 6)
}