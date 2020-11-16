export const FORM_RULES = {
  birthDay: [{ max: 10 }, { validator: required }],
  firstName: 100,
  lastName: [{ max: 100 }, { validator: required }],
  firstNameKana: [{ max: 100 }, { validator: fullWidthKatakana }],
  lastNameKana: [{ max: 100 }, { validator: fullWidthKatakana }],
  phoneNumber: 14,
}
function fullWidthKatakana(value) {
  if (!/^[ァ-ン]+$/.test(value)) {
    return '全角カタカナ'
  }
}
function required(value) {
  if (value === '') {
    return 'この値は必須項目です'
  }
}
