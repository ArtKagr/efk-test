export const state = () => ({
  status: '',
  films: {},
  currentFilm: {},
  currentFilmIndex: null
})

export const getters = {
  getStatus: (state) => state.status,
  getFilms: (state) => state.films,
  getCurrentFilm: (state) => state.currentFilm,
  getCurrentFilmIndex: (state) => state.currentFilmIndex
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_FILMS(state, films) {
    state.films = films
  },
  SAVE_CURRENT_FILM(state, currentFilm) {
    state.currentFilm = currentFilm
  },
  SAVE_CURRENT_FILM_INDEX(state, currentFilmIndex) {
    state.currentFilmIndex = currentFilmIndex
  }
}

export const actions = {
  async fetchFilms({ commit }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/api/films/`)
      commit('SET_STATUS', 'films-fetched')
      commit('SAVE_FILMS', data.results)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
  async fetchCurrentFilm({ commit }, currentFilm) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/api/films/${currentFilm}/`)
      commit('SET_STATUS', 'current-film-fetched')
      commit('SAVE_CURRENT_FILM', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
