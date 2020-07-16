/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-12 12:25
 */
import Vue from 'vue'

const extendsProps = {
  install(Vue) {
    // System environment differentiation
    Vue.prototype.$isManager = true
  },
}

Vue.use(extendsProps)
