/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-21 11:23
 */
export function fmtCarNumber(item) {
  return [item.vinLTO, item.vinNumber, item.vinKana, item.vin].join(' ')
}

export function fmtCustomerName(item) {
  return (item.firstName + ' ' + item.lastName).trim()
}

// ハイフン
export function fmtHyphen(text) {
  return text || '-'
}
