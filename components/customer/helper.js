/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-21 11:23
 */
import { toCommaNumber } from '~/assets/js/utils'

export function fmtCarNumber(item) {
  return [item.vinLTO, item.vinNumber, item.vinKana, item.vin].join(' ')
}

/**
 * format customer name
 * @param item
 * @returns {string}
 */
export function fmtCustomerName(item) {
  return [item.lastName, item.firstName].join(' ')
}

/**
 * ハイフン
 * @param text
 * @returns {*|string}
 */
export function fmtHyphen(text) {
  return text || '-'
}

/**
 * データが0の場合は”なし”、1の場合は”対象”を表示
 * @param alternativeTarget
 * @returns {string}
 */
export function fmtAlternative(alternativeTarget) {
  return alternativeTarget >> 0 ? '対象' : 'なし'
}

/**
 * 取引種別
 * @param value
 * @returns {string}
 */
export function fmtTransactionType(value) {
  return value >> 0 ? '#1E5199' : '#aaa'
}

/**
 * "円マーク \" + カンマ区切りの形式に編集して表示
 * データがない場合は"円マーク \" ごとブランク表示
 * @param value
 */
export function fmtMoney(value, noMark = false) {
  const mark = noMark ? '' : '¥'
  const result = toCommaNumber(value)
  return result ? mark + result : '-'
}

/**
 * フロントエンド側で下記項目の合計値を算出して表示。
 ・ガソリン代
 ・保険料
 ・駐車場代
 * 合計対象のデータがすべてブランクの場合は、ブランク表示
 * @param data
 */
export function sumCost(cost) {
  const result =
    ((cost.gasFee >> (0 + cost.insuranceFee)) >> (0 + cost.parkingFee)) >> 0
  return fmtMoney(result ? result.toString() : '')
}

/**
 * 車両重量 + ”Kg"
 * データがない場合は”Kg"ごとブランク表示
 * @param value
 */
export function fmtCarWeight(value) {
  return value >> 0 ? toCommaNumber(value) + 'Kg' : '-'
}

/**
 * 車体寸法（長さ）+ ”cm"
 * データがない場合は”cm"ごとブランク表示
 * @param value
 */
export function fmtCarSize(value) {
  const result = toCommaNumber(value)
  return result ? result + 'cm' : '-'
}
