/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-21 11:23
 */
import { toCommaNumber } from '~/assets/js/utils'

/**
 * 陸運事務局名称
 * + 半角スペース + 車両登録番号（種別）
 * + 半角スペース + 車両登録番号（カナ）
 * + 半角スペース + 車両登録番号（プレート番号）
 * 全てデータがない場合はブランク表示。いずれかデータがない場合は該当データだけハイフン表示
 * @param item
 * @returns {string}
 */
export function fmtCarNumber(item) {
  return [item.vinLTO, item.vinNumber, item.vinKana, item.vin].join(' ')
}

/**
 * format customer name
 * 氏名（姓） ＋ 半角スペース ＋ 氏名（姓）
 * どちらもデータがない場合はブランク表示
 * @param item
 * @returns {string}
 */
export function fmtCustomerName(data) {
  return [data.lastName, data.firstName].join(' ')
}

/**
 * format avatar data
 * @param data
 * @returns {{summary: string, name: string}}
 */
export function fmtAvatar(data) {
  return {
    name: fmtCustomerName(data),
    summary: `（${data.age || '-'}歳）`,
    url: '/common/person_default.svg',
  }
}

/**
 * 氏名カナ（姓） ＋ 半角スペース ＋ 氏名カナ（名）
 * 氏名カナ（姓）がブランクの場合は、氏名カナ（名）のみを表示（半角スペースは付加しない）
 * どちらもデータがない場合はブランク表示
 * @param item
 * @returns {string}
 */
export function fmtNameKana(data) {
  return [data.lastNameKana, data.firstNameKana].join(' ')
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
  // 20200901
  // 取引種別のエリアですが、
  // ここはProto・V1ではデータが存在しないため空欄になりますが、
  // 左のようなデザインで、すべてグレー固定で表示可能でしょうか？
  // return value >> 0 ? '#1E5199' : '#aaa'
  return '#aaa'
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

/**
 * 車体寸法（長さ）+ "mm"
 * データがない場合は”cm"ごとブランク表示
 * @param value
 */
export function fmtCarSizeMm(value) {
  const result = toCommaNumber(value)
  return result ? result + 'mm' : '-'
}

/**
 * APIからの戻り値「YYYY-MM-DD」形式を「YYYY/MM/DD」形式に編集して表示
 * データがない場合はブランク表示
 * @param value
 * @returns {*}
 */
export function fmtDate(value) {
  if (!value) return '-'
  // 202006
  if (/^\d+$/.test(value) && value.length > 4) {
    value = value.substr(0, 4) + '/' + value.substr(4)
  }
  return value.replace(/-/g, '/')
}

/**
 * 住所（都道府県） + 住所（市区町村） + 住所（番地） + 住所（その他）
 * @param value
 * @returns {*}
 */
export function fmtAddress(data) {
  return data
    ? [data.prefecture, data.city, data.address1, data.address2].join('')
    : data
}

/**
 * 電話番号（勤務先）を”半角丸カッコ()”で囲う
 * データがない場合は”半角丸カッコ()”ごとブランク表示
 * @param data
 * @returns {string}
 */
export function fmtWork(data) {
  const arr = []
  if (data.workName) {
    arr.push(data.workName)
  }
  if (data.workPhoneNumber) {
    arr.push(`(${data.workPhoneNumber})`)
  }
  return fmtHyphen(arr.join(''))
}
