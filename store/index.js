export const state = () => ({
  cacheVersion: '',
  language: 'fi',
  settings: {
    main_menu: [],
    quotes: []
  },
  drawer: false
})

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings
  },
  setLanguage(state, language) {
    state.language = language
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version
  },
  setDrawer(state, drawer) {
    state.drawer = drawer
  }
}

export const actions = {
  loadSettings({ commit }, context) {
    const { language, version } = context

    return this.$storyapi
      .get(`cdn/stories/${language}/asetukset`, { version: version })
      .then(res => {
        commit('setSettings', res.data.story.content)
      })
  }
}
