/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-08-13 15:40
 */
export const DEFAULT_QUERY = {
  offset: 0,
  limit: 10,
  page: 1,
  // 一旦ソートの機能は後回しにします。
  sort: {
    customerCode: '',
    lastName: '',
  },
  // // 顧客名（姓）
  // lastName: '',
  // // 顧客名（名）
  // firstName: '',
  // // 電話番号
  // phoneNumber: '',
  // // メーカー
  // maker: '',
  // // 車種
  // carType: '',
  // // 登録ナンバー
  // carRegistrationNumber: '',
  // 初度登録年月開始
  // registrationFirstDateFrom: '',
  // // 初度登録年月終了
  // registrationFirstDateTo: '',
  // // 車検満了年月開始
  // registrationEndDateFrom: '',
  // // 車検満了年月終了
  // registrationEndDateTo: '',
  // 買替意向
  // purchaseIntention: 0,
  // // 乗換対象
  // transferTarget: 0,
  // // 車検間近
  // nearInspection: 0,
  // // 6カ月内接点
  // sixMonthContact: 0,
}

export const CAR_LIST_QUERY = {
  page: 1,
  limit: 10,
  sort: {
    registrationFirstDate: '',
    registrationEndDate: '',
    sellingDatetime: '',
    carInspectionFlag: '',
    reservationFlag: '',
    tentiveReservationFlag: '',
  },
}
