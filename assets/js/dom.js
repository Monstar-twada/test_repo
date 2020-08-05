/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-20 15:44
 */
export function getMaxZIndex() {
  const $els = document.getElementsByTagName('*')
  let $el, css, zIndex
  const arr = []
  for (let i = 0; i < $els.length; i++) {
    $el = $els[i]
    if ($el.nodeType !== 1) continue
    css = window.getComputedStyle($el, null)
    if (css.position !== 'static') {
      zIndex = css.zIndex >> 0
      if (zIndex > 0) arr.push(zIndex)
    }
  }
  return Math.max.apply(null, arr)
}
