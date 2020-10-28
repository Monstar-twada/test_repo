// import { Middleware } from '@buxt/types'

export default async function ({ store, redirect }) {
  await store.dispatch('auth/load')
  // console.log(store.state.auth.isAuthenticated)
  if (!store.state.auth.isAuthenticated) {
    return redirect('/login/')
  }
}


// export const myMiddleWare: Middleware =  ({store, redirect}) => {
//   await store.dispatch('auth/load')
//     if (!store.state.auth.isAuthenticated) {
//     return redirect('/login/')
//   }
// }