import { ytmusic } from "../ytmusic";

export const SearchAlbum = async (query: string) => {
  await ytmusic.initialize()
  const searchAlbumResults = await ytmusic.searchAlbums(query)
  console.log(searchAlbumResults)
  return searchAlbumResults.filter((item: any) => item.type === 'ALBUM').slice(0, 6)
}