/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 15:46
 */
import { BASIC_DATA_CACHE_KEY } from '~/assets/constants/index'

/**
 * init basic data
 */
function initBasicData() {
  if (!this.$ui.getCache(BASIC_DATA_CACHE_KEY)) {
    this.$api
      .get('/code/codeType', { limit: 9999, offset: 0 })
      .then((res) => {
        this.$ui.setCache(BASIC_DATA_CACHE_KEY, formatList(res.results))
      })
      .catch((err) => {
        console.error(err)
      })
  }
  this.$ui.getBasicData = getBasicData
  this.$ui.clearBasicData = clearBasicData
}

/**
 * get basic data
 * @param key
 * @returns {*|*[]}
 */
function getBasicData(key) {
  const cache = this.getCache(BASIC_DATA_CACHE_KEY) || {}
  return cache[key] || []
}

function clearBasicData() {
  this.removeCache(BASIC_DATA_CACHE_KEY)
}

function formatList(res) {
  let data
  if (Array.isArray(res) && res.length > 0) {
    data = {}
    res.forEach(({ codeId, codeType, codeValue, codeName, sortNumber }) => {
      if (!data[codeType]) {
        data[codeType] = []
      }
      data[codeType].push({
        type: codeId,
        value: codeValue,
        text: codeName,
        sort: sortNumber,
      })
    })
  }
  return data
}

export const basicDataMixin = {
  created() {
    initBasicData.call(this)
  },
}
