import { ytmusic } from "../ytmusic";

export const SearchPlaylist = async (query: string) => {
  await ytmusic.initialize()
  const searchPlaylistResults = await ytmusic.searchPlaylists(query)
  return searchPlaylistResults.filter((item: any) => item === 'PLAYLIST').slice(0, 6)
}