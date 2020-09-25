/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 12:25
 */
import Vue from 'vue'
import FirstGroupUI from './first-group-ui/src/index'
import { RequestApi } from './api/index'
import { login } from '~/components/manager/plugins/login'

Vue.use(FirstGroupUI, {
  theme: 'blue',
  project: 'manager',
})

const extendsProps = {
  install(Vue) {
    // System environment differentiation
    Vue.prototype.$isManager = true
    // $api
    Vue.prototype.$api = new RequestApi(['X-CARS-MANAGER'])
    // $login
    Vue.prototype.$login = login
  },
}

Vue.use(extendsProps)
