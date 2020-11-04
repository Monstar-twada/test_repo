import Auth from '@aws-amplify/auth';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { RootState } from './index';

interface State {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
  storeCode: string | null;
  companyCode: string | null;
  userCode: string | null;
}

export const state = () => ({
  isAuthenticated: false,
  user: null,
  token: null,
  storeCode: null,
  companyCode: null,
  userCode: null,
});

export const getters: GetterTree<State, RootState> = {
  isAuthenticated: (state: State) => {
    return state.isAuthenticated;
  },
  user: (state: State) => {
    return state.user;
  },
  token: (state: State) => {
    return state.token;
  },
  userCode: (state: State) => {
    return state.userCode;
  },
  storeCode: (state: State) => {
    return state.storeCode;
  },
  companyCode: (state: State) => {
    return state.companyCode;
  },
};

export const mutations: MutationTree<State> = {
  setUser(state, user) {
    state.isAuthenticated = !!user;
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  setStoreCode(state, storeCode) {
    state.storeCode = storeCode;
  },
  setCompanyCode(state, companyCode) {
    state.companyCode = companyCode;
  },
  setUserCode(state, userCode) {
    state.userCode = userCode;
  },
};

export const actions: ActionTree<State, RootState> = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        const session = await Auth.currentSession();
        const userInfo = session?.getIdToken().payload;
        // eslint-disable-next-line camelcase
        const { store_code, company_code, user_code } = userInfo;
        commit('setStoreCode', store_code);
        commit('setCompanyCode', company_code);
        commit('setUserCode', user_code);
      }
      const checkUser = await Auth.currentAuthenticatedUser();
      if (checkUser) {
        const session = await Auth.currentSession();
        const token = session?.getIdToken()?.getJwtToken();
        if (token) {
          commit('setToken', token);
        }
      }
      commit('setUser', user);
    } catch (error) {
      commit('setUser', null);
      commit('setToken', null);
      commit('setStoreCode', null);
      commit('setCompanyCode', null);
      commit('setUserCode', null);
      this.$router.push('/login/');
    }
    // try {
    //   const cognitoUser = await Auth.currentAuthenticatedUser()
    //   const currentSession = await Auth.currentSession()
    //   cognitoUser.refreshSession(
    //     currentSession.refreshToken,
    //     (err, session) => {
    //       console.log('session', err, session)
    //       const { idToken, refreshToken, accessToken } = session
    //       console.log(idToken, refreshToken, accessToken)
    //     }
    //   )
    // } catch (e) {
    //   console.log('Unable to refresh Token', e)
    // }
  },

  async login({ commit }, { email, password }) {
    const user = await Auth.signIn(email, password);
    if (user) {
      // check if auth session data
      const session = await Auth.currentSession();
      // set store and company code
      const userInfo = session?.getIdToken().payload;
      // eslint-disable-next-line camelcase
      const { store_code, company_code, user_code } = userInfo;
      commit('setStoreCode', store_code);
      commit('setCompanyCode', company_code);
      commit('setUserCode', user_code);
      // set TOKEN here
      const checkUser = await Auth.currentAuthenticatedUser();
      if (checkUser) {
        const session = await Auth.currentSession();
        const token = session?.getIdToken()?.getJwtToken();
        if (token) {
          commit('setToken', token);
        }
      }
    }
    commit('setUser', user);
    return user;
  },

  async logout({ commit }) {
    await Auth.signOut();
    commit('setUser', null);
    commit('setToken', null);
    commit('setStoreCode', null);
    commit('setCompanyCode', null);
    commit('setUserCode', null);
    this.$router.push('/login/');
  },
};
