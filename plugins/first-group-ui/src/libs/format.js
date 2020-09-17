/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 12:39
 */
import { isBoolean, isArray } from './check'

/**
 * to number
 * @param a
 * @returns {*}
 */
export function toNumber(a) {
  const n = parseFloat(a)
  return isNaN(n) ? 0 : n
}

/**
 * to hump string
 * @param attr
 * @param spacer
 * @returns {string}
 */
export function toHumpStr(attr, spacer = '-') {
  if (!attr) return ''
  if (typeof attr !== 'string') {
    attr = attr.toString()
  }
  if ('.?*^$'.includes(spacer)) {
    spacer = '\\' + spacer
  }
  const reg = new RegExp(`${spacer}(.)`, 'g')
  return attr
    .toLowerCase()
    .replace(reg, (match, group1) => group1.toUpperCase())
}

/**
 * to two digits
 * @param s
 * @returns {string}
 */
export function toTwoDigits(s) {
  s = s + ''
  return s[1] ? s : '0' + s
}

export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      const value = source[prop]
      if (value !== undefined) {
        target[prop] = value
      }
    }
  }

  return target
}

/**
 * create random string
 * @param prefix
 * @returns {string}
 */
export function createRandomStr(prefix) {
  return prefix + '_' + Math.random().toString().substr(2)
}

/**
 * to comma number type
 * @param value
 * @param keepDecimalPlaces
 * @returns {string|*}
 */
export function toCommaNumber(value, keepDecimalPlaces = false) {
  if (!value) return value
  const arr = value.toString().split('.')
  const integerPartArray = arr[0].split('').reverse()
  const result = []
  for (let i = 0; i < integerPartArray.length; i++) {
    if (i && i % 3 === 0) {
      result.push(',')
    }
    result.push(integerPartArray[i])
  }
  arr[0] = result.reverse().join('')
  return keepDecimalPlaces ? arr.join('.') : arr[0]
}

/**
 * boolean to number
 * @param o
 * @param props
 * @returns {number}
 */
export function booleanToNumber(o, props) {
  if (isBoolean(o)) return +o
  if (!isArray(props)) {
    props = [props]
  }
  Object.keys(o).forEach((key) => {
    if (props.includes(key) && isBoolean(o[key])) {
      o[key] = +o[key]
    }
  })
}
