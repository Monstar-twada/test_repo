/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-21 10:15
 */
export const DEF_CUSTOMER_FORM = {
  // 顔写真
  // facePhoto: '',
  // 個人法人区分
  privateBusiness: '1',
  // 姓
  lastName: '',
  // 名
  firstName: '',
  // 姓カナ
  lastNameKana: '',
  // 名カナ
  firstNameKana: '',
  // 性別(コード)
  sex: '1',
  // 電話番号
  phoneNumber: '',
  // 携帯番号
  cellphoneNumber: '',
  // メール
  email: '',
  // 郵便番号
  zipCode: '',
  // 住所（都道府県コード）
  prefecturesCode: '',
  // 住所（市区町村）
  address1: '',
  // 住所（番地）
  address2: '',
  // 住所（建物名）
  address3: '',
  // 住宅（種類コード）
  residenceType: '1',
  // 住宅（入居日）
  moveInDate: '',
  // 生年月日
  birthday: '',
  // 勤務先名
  organizationName: '',
  // 勤務先電話番号
  organizationPhoneNumber: '',
  // 入社日
  hireDate: '',
  // 年収
  annualIncome: '',
  // 顧客免許証画像(表)
  licenseImageFront: null,
  // 顧客免許証画像(裏)
  licenseImageBack: null,
  // 免許証の色(コード)
  licenseColor: '1',
  // 免許証番号
  licenseNumber: '',
  family: [],
  // ペット
  pet: '',
  // 実家
  parentsHomeAddress: '',
  // 趣味
  hobby: '',
  // ドリンク
  drink: '',
  // // 通勤
  // useCompany: 0,
  // // 通学
  // useStady: 0,
  // // 通院
  // useHospital: 0,
  // // 送迎
  // usePickup: 0,
  // // 買い物
  // useShop: 0,
  // // ドライブ
  // useDrive: 0,
  // // アウトドア
  // useOutdoor: 0,
  // // 子育て
  // useChild: 0,
  // // レジャー
  // useLeisure: 0,
  // // 趣味
  // useHobby: 0,
  // // 商用業務
  // useBuissiness: 0,
  // // 運搬
  // useTrasfer: 0,
  // // 価格
  // pointPrise: 0,
  // // 燃費
  // pointFuel: 0,
  // // 乗り心地
  // pointRideQuality: 0,
  // // 安全性
  // pointSafty: 0,
  // // デザイン性
  // pointDesign: 0,
  // // ブランド
  // pointBrand: 0,
  // // 走行性能
  // pointRunQuality: 0,
  // // 走行距離
  // pointMileage: 0,
  // // 修復歴
  // pointRepair: 0,
  // // 年式
  // pointAge: 0,
  // // 禁煙
  // pointSmoke: 0,
  // // 車検年数
  // pointInspection: 0,
}

export const CAR_LIVES_ENUM = {
  // 通勤
  1: 'useCompany',
  // 通学
  2: 'useStady',
  // 通院
  3: 'useHospital',
  // 送迎
  4: 'usePickup',
  // 買い物
  5: 'useShop',
  // 子育て
  6: 'useChild',
  // ドライブ
  7: 'useDrive',
  // アウトドア
  8: 'useOutdoor',
  // レジャー
  9: 'useLeisure',
  // 趣味
  10: 'useHobby',
  // 商用業務
  11: 'useBuissiness',
  // 運搬
  12: 'useTrasfer',
}

export const SELECTION_POINT_ENUM = {
  // 価格
  1: 'pointPrise',
  // 燃費
  2: 'pointFuel',
  // 乗り心地
  3: 'pointRideQuality',
  // 安全性
  4: 'pointSafty',
  // デザイン性
  5: 'pointDesign',
  // ブランド
  6: 'pointBrand',
  // 走行性能
  7: 'pointRunQuality',
  // 走行距離
  8: 'pointMileage',
  // 修復歴
  9: 'pointRepair',
  // 年式
  10: 'pointAge',
  // 禁煙
  11: 'pointSmoke',
  // 車検年数
  12: 'pointInspection',
}

// family
export const DEF_CUSTOMER_FAMILY = {
  // 続柄(コード)
  familyRelationship: '1',
  lastName: '',
  firstName: '',
  birthday: '',
  // 家族顧客コード
  familyCustomerCode: '',
}
