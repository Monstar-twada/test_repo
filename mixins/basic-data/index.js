/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 15:46
 */
import { clearBasicData, getBasicData, initBasicData } from '~/mixins/basic-data/helper'

export const basicDataMixin = {
  created() {
    initBasicData.call(this)
    // extend $ui methods
    this.$ui.getBasicData = getBasicData
    this.$ui.clearBasicData = clearBasicData
  },
}
