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
