/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-01 17:25
 */
/**
 * HTML escape characters
 * @param str
 * @returns {string}
 */
exports.escapeTag = function escapeTag(str) {
  return str.replace(/<(\/?\w+)/g, '&lt;$1').replace(/(\w+)>/g, '$1&gt;')
}
