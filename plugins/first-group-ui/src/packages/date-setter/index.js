/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-21 12:12
 */
import DateSetter from './src/index'

DateSetter.install = function (Vue) {
  Vue.component(DateSetter.name, DateSetter)
}

export default DateSetter
