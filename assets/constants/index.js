/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-10 10:01
 */
import { CAR_BODY_TYPES } from './car-body-types'
import { CAR_COLORS } from './car-colors'

/** local cache keys */
const BASIC_MASTER_CACHE_KEY = 'BASIC_MASTER'
const BASIC_PREFECTURE_CACHE_KEY = 'BASIC_PREFECTURE'

// 以下は削除対象になり、マスターデータから取得してください
const CAR_LIVES = []
const CUSTOMER_TYPES = []
const GENDERS = []
const SELECTION_POINTS = []

export {
  BASIC_MASTER_CACHE_KEY,
  BASIC_PREFECTURE_CACHE_KEY,
  CAR_BODY_TYPES,
  CAR_COLORS,
  CAR_LIVES,
  CUSTOMER_TYPES,
  GENDERS,
  SELECTION_POINTS,
}
