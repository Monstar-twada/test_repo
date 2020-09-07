/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-04 10:58
 */
export const login = {
  success() {
    this.$router.push('/customer')
  },
}

export const forgot = {
  success() {
    this.$router.push('/pin')
  },
}
