import { RootState } from './index';
import { ActionTree, GetterTree, MutationTree } from 'vuex' 

export interface State {
  saveFlg: boolean,
}

export const state = () => ({
  saveFlg: false,
})

export const mutations: MutationTree<State> = {
  SET_SAVE_FLG(state, payload) {
    state.saveFlg = payload
  },
}

export const actions: ActionTree<State, RootState> = {
  setFlg({ commit }, flag) {
    commit('SET_SAVE_FLG', flag)
  },
}

export const getters: GetterTree<State, RootState> = {
  getSaveFlg(state) {
    return state.saveFlg
  },
}
