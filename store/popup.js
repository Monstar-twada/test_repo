export const state = () => ({
  saveFlg: false,
})

export const mutations = {
  SET_SAVE_FLG(state, payload) {
    state.saveFlg = payload
  },
}

export const actions = {
  setFlg({ commit }, flag) {
    commit('SET_SAVE_FLG', flag)
  },
}

export const getters = {
  getSaveFlg(state) {
    return state.saveFlg
  },
}
