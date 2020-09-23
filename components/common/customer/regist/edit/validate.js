/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-21 15:53
 */
export function validate(form) {
  const errorMessages = {}
  let count = 0
  if (!form.lastName) {
    errorMessages.lastName = `入力してください`
    count++
  }
  if (!form.firstName) {
    errorMessages.firstName = `入力してください`
    count++
  }
  // phoneNumber
  errorMessages.length = count
  return errorMessages
}
