/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-14 16:17
 */
import { getCache, setCache, removeCache, clearCache } from './storage'
import { logStr } from './console'
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
  isElement,
  isFunction,
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
  toNumber,
  toTwoDigits,
  toHumpStr,
  toCommaNumber,
  createRandomStr,
  merge,
} from './format'

/**
 * init app
 * @param project
 */
function init(project = 'manager') {
  this.project = project
}

export {
  clearCache,
  createRandomStr,
  createUrlQuery,
  getCache,
  getMaxZIndex,
  getParentComponent,
  getStyleValue,
  getScrollBarWidth,
  getScrollParents,
  hasOwn,
  init,
  logStr,
  merge,
  isArray,
  isElement,
  isFunction,
  isNumber,
  isNumberLike,
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
  windowDispatcher,
}
