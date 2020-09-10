/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-30 17:57
 */
import FgMessage from './src/index'

FgMessage.install = function (Vue) {
  Vue.component(FgMessage.name, FgMessage)
}

export default FgMessage
