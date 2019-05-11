function getValidLanguage(lang1, lang2) {
  const validLanguages = ['fi', 'en', 'nl']
  const firstValid = validLanguages.some(l => l === lang1)
  const secondValid = validLanguages.some(l => l === lang2)

  if (firstValid) {
    return lang1
  } else if (secondValid) {
    return lang2
  }
}

export default function({ app, isServer, route, store, isDev }) {
  const version = route.query._storyblok || isDev ? 'draft' : 'published'

  const path = route.params.pathMatch
  const lang1 = path.substring(0, 2)
  const lang2 = path.slice(1).substring(0, 2)

  const language = getValidLanguage(lang1, lang2) || 'fi'

  if (isServer) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  if (!store.state.settings._uid || language !== store.state.language) {
    store.commit('setLanguage', language)

    return store.dispatch('loadSettings', {
      version: version,
      language: language
    })
  }
}
