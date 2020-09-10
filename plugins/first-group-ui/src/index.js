/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-30 17:26
 */
import FgAvatar from './packages/avatar/index'
import FgBreadcrumbs from './packages/breadcrumbs/index'
import FgBreadcrumbsItem from './packages/breadcrumbs-item/index'
import FgButton from './packages/button/index'
import FgCalendar from './packages/calendar/index'
import FgCheckbox from './packages/checkbox/index'
import FgCodeInput from './packages/code-input/index'
import FgCol from './packages/row/col'
import FgDatePicker from './packages/date-picker/index'
import FgDateSetter from './packages/date-setter/index'
import FgDialog from './packages/dialog/index'
import FgForm from './packages/form/index'
import FgFormItem from './packages/form-item/index'
import FgIcon from './packages/icon/index'
import FgImage from './packages/image/index'
import FgImageProcessor from './packages/image-processor/index'
import FgInput from './packages/input/index'
import FgMessage from './packages/message/index'
import FgMessageBox from './packages/message-box/index'
import FgMonthPicker from './packages/month-picker/index'
import FgPagination from './packages/pagination/index'
import FgProgress from './packages/progress/index'
import FgRadio from './packages/radio/index'
import FgRadioGroup from './packages/radio-group/index'
import FgRow from './packages/row/index'
import FgSelect from './packages/select/index'
import FgSwitch from './packages/switch/index'
import FgTable from './packages/table/index'
import FgTableColumn from './packages/table-column/index'
import FgTableExperiment from './packages/table-experiment/index'
import FgTag from './packages/tag/index'
import FgText from './packages/text/index'

import themeBlue from './plugins/theme-blue'
import themeRed from './plugins/theme-red'
import * as libs from './libs/index'

const components = [
  FgAvatar,
  FgBreadcrumbs,
  FgBreadcrumbsItem,
  FgButton,
  FgCalendar,
  FgCheckbox,
  FgCodeInput,
  FgCol,
  FgDatePicker,
  FgDateSetter,
  FgDialog,
  FgForm,
  FgFormItem,
  FgIcon,
  FgImage,
  FgImageProcessor,
  FgInput,
  FgMessage,
  // FgMessageBox,
  FgMonthPicker,
  FgPagination,
  FgProgress,
  FgRadio,
  FgRadioGroup,
  FgRow,
  FgSelect,
  FgSwitch,
  FgTable,
  FgTableColumn,
  FgTableExperiment,
  FgTag,
  FgText,
]

const colors = {
  blue: themeBlue,
  red: themeRed,
}

function install(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  const $ui = {
    ...opts,
    ...libs,
  }

  Vue.prototype.$ui = $ui
  Vue.prototype.$firstGroupUI = $ui

  Vue.prototype.$colors = colors[opts.theme] || themeBlue
  Vue.prototype.$alert = FgMessageBox.alert
  Vue.prototype.$confirm = FgMessageBox.confirm
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const exportItems = {
  version: '__VERSION__',
  install,
  FgMessageBox,
}

components.forEach((component) => {
  exportItems[component.name] = component
})

export default exportItems
