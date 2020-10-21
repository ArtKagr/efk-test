export const state = () => ({
  status: '',
  people: {},
  currentActor: {},
  currentPeopleIndex: null
})

export const getters = {
  getStatus: (state) => state.status,
  getPeople: (state) => state.people,
  getCurrentActor: (state) => state.currentActor,
  getCurrentActorIndex: (state) => state.currentPeopleIndex
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_PEOPLE(state, people) {
    state.people = people
  },
  SAVE_CURRENT_ACTOR(state, currentActor) {
    state.currentActor = currentActor
  },
  SAVE_CURRENT_PEOPLE_INDEX(state, currentPeopleIndex) {
    state.currentPeopleIndex = currentPeopleIndex
  }
}

export const actions = {
  async fetchPeople({ commit }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/api/people/`)
      commit('SET_STATUS', 'people-fetched')
      commit('SAVE_PEOPLE', data.results)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
  async fetchCurrentActor({ commit }, currentActor) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$get(`/api/people/${currentActor}/`)
      commit('SET_STATUS', 'current-actor-fetched')
      commit('SAVE_CURRENT_ACTOR', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
