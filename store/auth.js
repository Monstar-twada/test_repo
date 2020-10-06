import Auth from '@aws-amplify/auth'

export const state = () => ({
  isAuthenticated: false,
  user: null,
  token: null,
  store_code: null,
  company_code: null,
})

export const mutations = {
  setUser(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  },
  setStoreId(state, storeId) {
    state.storeId = storeId
  },
  setCompanyId(state, companyId) {
    state.companyId = companyId
  },
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (user) {
        const session = await Auth.currentSession()
        const userInfo = session?.getIdToken().payload
        // eslint-disable-next-line camelcase
        const { store_code, company_code } = userInfo
        commit('setStoreId', store_code)
        commit('setCompanyId', company_code)
      }
      const checkUser = await Auth.currentAuthenticatedUser()
      if (checkUser) {
        const session = await Auth.currentSession()
        const token = session?.getIdToken()?.getJwtToken()
        if (token) {
          commit('setToken', token)
        }
      }
      commit('setUser', user)
    } catch (error) {
      commit('setUser', null)
      commit('setToken', null)
      commit('storeId', null)
      commit('companyId', null)
      this.$router.push('/login')
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
    const user = await Auth.signIn(email, password)
    if (user) {
      // check auth session data
      const session = await Auth.currentSession()
      // set store and company code
      const userInfo = session?.getIdToken().payload
      // eslint-disable-next-line camelcase
      const { store_code, company_code } = userInfo
      commit('setStoreId', store_code)
      commit('setCompanyId', company_code)
      // set TOKEN here
      const checkUser = await Auth.currentAuthenticatedUser()
      if (checkUser) {
        const session = await Auth.currentSession()
        const token = session?.getIdToken()?.getJwtToken()
        if (token) {
          commit('setToken', token)
        }
      }
    }
    commit('setUser', user)
    return user
  },

  async logout({ commit }) {
    await Auth.signOut()
    commit('setUser', null)
    commit('setToken', null)
    commit('storeId', null)
    commit('companyId', null)
    this.$router.push('/login')
  },
}
