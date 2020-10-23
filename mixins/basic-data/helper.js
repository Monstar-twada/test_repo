/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-17 10:58
 */
import {
  BASIC_MASTER_CACHE_KEY,
  BASIC_PREFECTURE_CACHE_KEY,
} from '~/assets/constants'

/**
 * init basic data
 */
export function initBasicData() {
  // master
  let basicData = this.$ui.getCache(BASIC_MASTER_CACHE_KEY)
  if (!basicData) {
    this.$api
      .get('/v1/code/all', { limit: 9999, offset: 0 })
      .then((res) => {
        basicData = formatMasterList(res.results)
        if (basicData) {
          this.$ui.setCache(BASIC_MASTER_CACHE_KEY, basicData)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // prefectures
  let prefectureData = this.$ui.getCache(BASIC_PREFECTURE_CACHE_KEY)
  if (!prefectureData) {
    this.$api
      .get('/v1/prefectures', { limit: 9999, offset: 0 })
      .then((res) => {
        prefectureData = formatPrefectureList(res.results)
        if (prefectureData) {
          this.$ui.setCache(BASIC_PREFECTURE_CACHE_KEY, prefectureData)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

function formatMasterList(res) {
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

function formatPrefectureList(res) {
  if (Array.isArray(res) && res.length > 0) {
    return res.map(({ prefecturesCode, name }) => {
      return {
        text: name,
        value: prefecturesCode,
      }
    })
  }
  return null
}
