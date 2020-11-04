/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-17 23:46
 */
import DatePicker from './src/index';

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
