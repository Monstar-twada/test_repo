/**
 * Date: 2020-09-02 15:17
 */
import Vue from 'vue'
import FirstGroupUI from 'first-group-ui'
import { RequestApi } from './api'
import { login } from '~/components/console/plugins/login'
// css
import 'first-group-ui/dist/index.red.css'

Vue.use(FirstGroupUI, { theme: 'red' })

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
