/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 15:46
 */
import { initBasicData } from '~/mixins/basic-data/helper'

export const basicDataMixin = {
  created() {
    initBasicData.call(this)
  },
}
