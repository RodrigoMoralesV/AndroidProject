import React from 'react'

import { ytmusic } from '../ytmusic'

// Parte principal de la vista Home donde se mostraran sugerencias de canciones, por ahora no se como hacerlo xd
export const Suggestions = async () => {
  await ytmusic.initialize();
  const suggestionsResults = await ytmusic.getSearchSuggestions()
  return suggestionsResults;
}
