/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 12:25
 */
import Vue from 'vue'
import FirstGroupUI from 'first-group-ui'
import { RequestApi } from './api'
// css
import 'first-group-ui/dist/index.blue.css'

Vue.use(FirstGroupUI, { theme: 'blue' })

const extendsProps = {
  install(Vue) {
    // System environment differentiation
    Vue.prototype.$isManager = false
    // $api
    Vue.prototype.$api = new RequestApi(['X-CARS-DASHBOARD'])
  },
}

Vue.use(extendsProps)
