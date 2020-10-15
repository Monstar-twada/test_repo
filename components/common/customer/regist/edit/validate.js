/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-21 15:53
 */
export const FORM_RULES = {
  // privateBusiness: [{ required: true }],
  lastName: [{ required: true, max: 255 }],
  firstName: 255,
  lastNameKana: 255,
  firstNameKana: 255,
  // sex: [{ required: true }],
  cellphoneNumber: 100,
  phoneNumber: 100,
  email: 254,
  zipCode: 20,
  // prefecturesCode: [{ required: true }],
  address1: 255,
  address2: 255,
  address3: 255,
  organizationName: 255,
  organizationPhoneNumber: 30,
  annualIncome: 30,
  licenseNumber: [{ max: 12 }, { validator: halfWidthNumber }],
  pet: 255,
  parentsHomeAddress: 255,
  drink: 255,
  hobby: 255,
}

function halfWidthNumber(value) {
  if (value && !/^\d+$/.test(value)) {
    return '半角数値のみ'
  }
  return null
}
