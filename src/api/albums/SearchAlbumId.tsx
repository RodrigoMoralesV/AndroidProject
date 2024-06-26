import { ytmusic } from "../ytmusic";

export const SearchAlbumId = async (id: string) => {
  await ytmusic.initialize()
  const searchAlbumResults = await ytmusic.getAlbum(id)
  console.log(searchAlbumResults)
}