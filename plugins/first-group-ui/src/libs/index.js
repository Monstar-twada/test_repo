/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-14 16:17
 */
import { getCache, setCache, removeCache, clearCache } from './storage'
import { logStr, log, warn, error } from './console'
import {
  getMaxZIndex,
  getStyleValue,
  getScrollBarWidth,
  resetZIndex,
  getScrollParents,
} from './dom'
import {
  hasOwn,
  isArray,
  isBoolean,
  isElement,
  isFunction,
  isObject,
  isUndefined,
  isString,
  isNumber,
  isNumberLike,
} from './check'
import { createUrlQuery } from './url'
import { slice } from './array'
import { getParentComponent } from './component'
import { windowDispatcher } from './events'
import {
  booleanToNumber,
  toNumber,
  toTwoDigits,
  toHumpStr,
  toCommaNumber,
  createRandomStr,
  merge,
} from './format'
import { fmtSort, clearBasicData, getBasicData } from './extends/index'

/**
 * init app
 * @param project
 */
function init(project = 'fg') {
  this.project = project
}

export {
  booleanToNumber,
  clearBasicData,
  clearCache,
  createRandomStr,
  createUrlQuery,
  error,
  fmtSort,
  getBasicData,
  getCache,
  getMaxZIndex,
  getParentComponent,
  getStyleValue,
  getScrollBarWidth,
  getScrollParents,
  hasOwn,
  init,
  log,
  logStr,
  merge,
  isArray,
  isBoolean,
  isElement,
  isFunction,
  isNumber,
  isNumberLike,
  isObject,
  isString,
  isUndefined,
  removeCache,
  resetZIndex,
  setCache,
  slice,
  toCommaNumber,
  toNumber,
  toTwoDigits,
  toHumpStr,
  warn,
  windowDispatcher,
}
