/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-13 15:40
 */
export const DEFAULT_QUERY = {
  offset: 0,
  limit: 10,
  name: '',
  maker: '',
  class: '',
  vin: '',
  // 202006
  firstRegistrationDateFrom: '',
  firstRegistrationDateTo: '',
  // 2020-06-01"
  inspectionExpirationDateFrom: '',
  inspectionExpirationDateTo: '',
  page: 1,
}

// 個人/法人
export const CUSTOMER_TYPES = [
  {
    text: '個人',
    value: 1,
  },
  {
    text: '法人',
    value: 2,
  },
]

// 性別
export const GENDERS = [
  {
    text: '男性',
    value: '男',
  },
  {
    text: '女性',
    value: '女',
  },
]

// 取引種別
export const TRANSACTION_TYPES = [
  {
    key: 'tradeSales',
    text: '車販',
  },
  {
    key: 'tradeMaintenance',
    text: '整備',
  },
  {
    key: 'tradeInspection',
    text: '車検',
  },
  {
    key: 'tradeSheetMetal',
    text: '鈑金',
  },
  {
    key: 'tradeInsurance',
    text: '保険',
  },
]

// 選定ポイント
export const SELECTION_POINTS = [
  {
    text: '価格',
  },
  {
    text: '燃費',
    active: true,
  },
  {
    text: '乗り心地',
  },
  {
    text: '安全性能',
  },
  {
    text: 'デザイン性',
    active: true,
  },
  {
    text: 'ブランド',
  },
  {
    text: '走行性能',
  },
  {
    text: '走行距離',
    active: true,
  },
  {
    text: '修理歴',
  },
  {
    text: '年式',
  },
  {
    text: '禁煙',
  },
  {
    text: '車検年数',
  },
]

// カーライフ
export const CAR_LIVES = [
  {
    text: '通勤',
    active: true,
  },
  {
    text: '通学',
    active: true,
  },
  {
    text: '通院',
  },
  {
    text: '送迎',
  },
  {
    text: '買い物',
    active: true,
  },
  {
    text: '子育て',
  },
  {
    text: 'ドライブ',
  },
  {
    text: 'アウトドア',
  },
  {
    text: 'レジャー',
    active: true,
  },
  {
    text: '趣味',
  },
  {
    text: '商用 / 業務',
  },
  {
    text: '運搬',
  },
]
