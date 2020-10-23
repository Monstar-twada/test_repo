/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 14:53
 */
export const ACTIVITY_LIST_QUERY = {
  page: 1,
  limit: 10,
  sort: {
    checkFlag: '',
    carCode: '',
    transactionType: '',
    channel: '',
    contactStaffId: '',
  },
}

export const DEF_FORM = {
  // 活動日時
  activityReportDatetime: '',
  // チェック
  checkFlag: 0,
  // 対象車両コード
  carCode: '',
  // 取引種別
  transactionType: '1',
  // チャネル
  channel: '1',
  // コメント
  comment: '',
  // 担当店舗コード
  contactStoreCode: '',
  // 担当者コード
  contactStaffCode: '',
}
