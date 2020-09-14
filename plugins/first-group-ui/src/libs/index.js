/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-31 11:07
 */
import {
  getPropByPath,
  getRandomStr,
  merge,
  noop,
  slice,
  toHumpStr,
  toNumber,
  toTwoDigits,
} from './utils'
import {
  isString,
  isFunction,
  isNumber,
  isNumberLike,
  isUndefined,
} from './check'
import {
  getScrollParents,
  getMaxZIndex,
  getScrollBarWidth,
  getStyleValue,
  isElement,
  resetZIndex,
} from './dom'
import { getParentComponent } from './component'
import { windowDispatcher } from './events'

export {
  getScrollParents,
  getMaxZIndex,
  getParentComponent,
  getPropByPath,
  getRandomStr,
  getScrollBarWidth,
  getStyleValue,
  isElement,
  isFunction,
  isNumber,
  isNumberLike,
  isString,
  isUndefined,
  merge,
  noop,
  resetZIndex,
  slice,
  toHumpStr,
  toNumber,
  toTwoDigits,
  windowDispatcher,
}
