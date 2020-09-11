/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-31 10:45
 */
/**
 * to number
 * @param a
 * @returns {*}
 */
export function toNumber(a) {
  const n = parseFloat(a)
  return isNaN(n) ? 0 : n
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
 * get random string
 * @param prefix
 * @returns {string}
 */
export function getRandomStr(prefix) {
  return prefix + '_' + Math.random().toString().substr(2)
}

/**
 * noop function
 */
export function noop() {}

/**
 * get props by path
 * @param obj
 * @param path
 * @param strict
 * @returns {{v: (*|null), k: *, o: *}}
 */
export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
  }
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

export function slice(o, index = 0) {
  return Array.prototype.slice.call(o, index)
}
