/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 12:25
 */
import Vue from 'vue'
import FirstGroupUI from './first-group-ui/src/index'
import { RequestApi } from './api/index'
import { login } from '~/components/dashboard/plugins/login'

Vue.use(FirstGroupUI, {
  theme: 'blue',
  project: 'dashboard',
})

const extendsProps = {
  install(Vue) {
    // System environment differentiation
    Vue.prototype.$isManager = false
    // $api
    Vue.prototype.$api = new RequestApi(['X-CARS-DASHBOARD'])
    // $login
    Vue.prototype.$login = login
  },
}

Vue.use(extendsProps)
