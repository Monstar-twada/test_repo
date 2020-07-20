/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-20 11:54
 */
const PREFIX = 'first_group_'
export const storage = {
  get (key) {
    let result = localStorage.getItem(PREFIX + key)
    try {
      result = JSON.parse(result)
    } catch (e) {
    }
    return result
  },
  set (key, value) {
    localStorage.setItem(PREFIX + key, typeof value === 'string' ? value : JSON.stringify(value))
  },
  remove(key) {
    localStorage.removeItem(PREFIX + key)
  },
  clear() {
    localStorage.clear()
  }
}
