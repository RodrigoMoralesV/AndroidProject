import React from 'react'

import { ytmusic } from '../ytmusic'

export const Suggestions = async () => {
  await ytmusic.initialize();
  const suggestionsResults = await ytmusic.getSearchSuggestions()
  return suggestionsResults;
}
