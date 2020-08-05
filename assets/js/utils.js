/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-20 09:37
 */
/**
 * change pseudo array to array
 * @param pseudoArray
 * @param offset
 * @returns {unknown[]}
 */
export function slice(pseudoArray, offset = 0) {
  return Array.prototype.slice.call(pseudoArray, offset)
}

/**
 * create url query
 * @param data
 * @param fields
 * @returns {string}
 */
export function createUrlQuery(data, fields) {
  if (!Array.isArray(fields)) {
    fields = Object.keys(data)
  }
  const str = fields.reduce((prev, key) => {
    /* eslint-disable no-prototype-builtins */
    if (data.hasOwnProperty(key)) {
      prev += `${key}=${data[key]}&`
    }
    return prev
  }, '?')
  return str.substr(0, str.length - 1)
}

/**
 * to number
 * @param value
 * @returns {*}
 */
export function toNumber(value) {
  return value >> 0
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
