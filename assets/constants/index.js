/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-10 10:01
 */
import { CAR_BODY_TYPES } from './car-body-types'
import { CAR_COLORS } from './car-colors'
import { CAR_LIVES } from './car-lives'
import { SELECTION_POINTS } from './selection-points'

// 個人/法人
const CUSTOMER_TYPES = [
  {
    text: '個人',
    value: 1,
  },
  {
    text: '法人',
    value: 2,
  },
]

// 性別
const GENDERS = [
  {
    text: '男性',
    value: '男',
  },
  {
    text: '女性',
    value: '女',
  },
]

const BASIC_DATA_CACHE_KEY = 'BASIC_DATA_CACHE_KEY'

export {
  BASIC_DATA_CACHE_KEY,
  CAR_BODY_TYPES,
  CAR_COLORS,
  CAR_LIVES,
  CUSTOMER_TYPES,
  GENDERS,
  SELECTION_POINTS,
}
