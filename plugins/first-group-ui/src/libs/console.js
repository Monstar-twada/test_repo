/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-15 15:01
 */
export function logStr(...args) {
  args.forEach((o) => {
    console.log(JSON.stringify(o, null, 2))
  })
}
