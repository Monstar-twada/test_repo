import Auth from '@aws-amplify/auth'

export const state = () => ({
  isAuthenticated: false,
  user: null,
  token: null,
})

export const mutations = {
  setUser(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      // const user = await Auth.currentUserInfo()
      if (user) {
        const session = await Auth.currentSession()
        const token = session?.getIdToken()?.getJwtToken()
        if (token) {
          commit('setToken', token)
        }
      }
      commit('setUser', user)
    } catch (error) {
      commit('set', null)
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
    commit('setUser', user)
    return user
  },

  async logout({ commit }) {
    await Auth.signOut()
    commit('setUser', null)
    commit('setToken', null)
    this.$router.push('/login')
  },
}
