import { ytmusic } from "../ytmusic"

export const SearchArtists = async (query: string) => {
  await ytmusic.initialize()
  const searchArtistsResults = await ytmusic.searchArtists(query)
  console.log(searchArtistsResults)
  return searchArtistsResults.filter((item: any) => item.type === 'ARTIST').slice(0, 6)
}