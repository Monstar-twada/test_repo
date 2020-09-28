import Auth from '@aws-amplify/auth'

export const state = () => ({
  isAuthenticated: false,
  user: null,
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user
    state.user = user
  },
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)
      return user
    } catch (error) {
      commit('set', null)
    }
    // try {
    //     const cognitoUser = await Auth.currentAuthenticatedUser()
    //     const currentSession = await Auth.currentSession()
    //     cognitoUser.refreshSession(
    //       currentSession.refreshToken,
    //       (err, session) => {
    //         console.log('session', err, session)
    //         const { idToken, refreshToken, accessToken } = session
    //         console.log(idToken, refreshToken, accessToken)
    //       }
    //     )
    //   } catch (e) {
    //     console.log('Unable to refresh Token', e)
    //   }
  },

  async login({ commit }, { email, password }) {
    const user = await Auth.signIn(email, password)
    commit('set', user)
    return user
  },

  async logout({ commit }) {
    await Auth.signOut()
    commit('set', null)
  },
}
