function getValidLanguage(lang) {
  const validLanguages = ['fi', 'en', 'nl']
  const isValid = validLanguages.some(l => l === lang)

  if (isValid) {
    return lang
  }
}

export default function({ app, isServer, route, store, isDev }) {
  const version = isDev ? 'draft' : 'published'
  const path = route.params.pathMatch
  const lang = path.replace(/\//g, '').substring(0, 2)
  const language = getValidLanguage(lang) || 'fi'

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
