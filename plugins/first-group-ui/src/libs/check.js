/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-10 16:25
 */
/**
 * is number
 * @param str
 * @returns {boolean}
 */
export function isNumber(str) {
  return typeof str === 'number'
}

/**
 * is number like
 * @param str
 * @returns {boolean}
 */
export function isNumberLike(str) {
  return /^-?\d+\.?\d*$/.test(str)
}

export function isUndefined(o) {
  return typeof o === 'undefined'
}

export function isString(s) {
  return typeof s === 'string'
}

export function isFunction(fn) {
  return typeof fn === 'function'
}
