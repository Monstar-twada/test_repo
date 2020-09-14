/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-30 17:57
 */
import Calendar from './src/index'

Calendar.install = function (Vue) {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar
