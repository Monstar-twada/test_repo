export default async function ({ store, redirect }) {
  await store.dispatch('auth/load')
  // console.log(store.state.auth.isAuthenticated)
  if (!store.state.auth.isAuthenticated) {
    return redirect('/login/')
  }
}
