export const state = () => ({
  isSignedIn: false,
})

export const mutations = {
  signIn(state, payload) {
    state.isSignedIn = payload
    this.$router.push('/bi')
  },
  signOut(state, payload) {
    state.isSignedIn = payload
    this.$router.push('/login')
  },
}

export const actions = {}

export const getters = {}
