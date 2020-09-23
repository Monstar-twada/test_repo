/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-23 16:12
 */
export function validate(form) {
  const errors = {}
  let count = 0
  if (!form.registrationNumber) {
    count++
  }
  errors.length = count
  return errors
}
