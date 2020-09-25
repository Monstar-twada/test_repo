/**
 * Date: 2020-09-02 15:17
 */
import Vue from 'vue'
import FirstGroupUI from './first-group-ui/src/index'
import { RequestApi } from './api/index'
import { login } from '~/components/console/plugins/login'

Vue.use(FirstGroupUI, {
  theme: 'red',
  project: 'console',
  isDev: process.env.useMockData || process.env.NODE_ENV === 'development',
})

const extendsProps = {
  install(Vue) {
    // System environment differentiation
    Vue.prototype.$isConsole = true
    // $api
    Vue.prototype.$api = new RequestApi(['X-CARS-MANAGER'])
    // $login
    Vue.prototype.$login = login
  },
}

Vue.use(extendsProps)
