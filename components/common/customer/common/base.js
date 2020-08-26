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

export const customerTypes = [
  {
    text: '個人',
    value: 1,
  },
  {
    text: '法人',
    value: 2,
  },
]

export const genders = [
  {
    text: '男性',
    value: '男',
  },
  {
    text: '女性',
    value: '女',
  },
]
