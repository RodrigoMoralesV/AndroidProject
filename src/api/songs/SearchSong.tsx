import { ytmusic } from '../ytmusic'

export const SearchSong = async (query: string) => {
  await ytmusic.initialize()
  const searchSongResults = await ytmusic.searchSongs(query)
  console.log(searchSongResults)
  return searchSongResults.filter((item: any) => item.type === 'SONG').slice(0, 4)
}
