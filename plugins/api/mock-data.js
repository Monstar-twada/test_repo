/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-09-14 16:15
 */
import YAML from 'yaml';

/**
 * get mock data
 * @param api
 * @param params
 * @param load
 * @param method
 * @returns {Promise<unknown>}
 */
export function getMockData(api, params = {}, load, method) {
  console.log('[MOCK REQUEST]', method, api, params);
  return new Promise((resolve, reject) => {
    if (/put|post|delete/i.test(method)) {
      console.warn('[MOCK METHOD] handle put|post|delete', api);
    }
    /* eslint-disable */
    const { hasOwn } = $nuxt.$ui
    getLocalData(api, load, false)
      .then((data) => {
        // list
        if (hasOwn(params, 'limit') && hasOwn(params, 'offset')) {
          const list = data || []
          const results = list.slice(
            params.offset,
            params.offset + params.limit
          )
          resolve({
            total: list.length,
            resultsSize: results.length,
            limit: params.limit,
            offset: params.offset,
            results,
          })
        } else {
          resolve(data)
        }
      })
      .catch((err) => {
        /* eslint-disable prefer-promise-reject-errors */
        reject({
          message: err.message,
          errors: [err],
        })
      })
  })
}

/**
 * format api file path
 * @param api
 * @param isYaml
 * @returns {string}
 */
function fmtApiUrl(api, isYaml) {
  return `/_mock-data${api.split('?')[0]}.${isYaml ? 'yml' : 'json'}`
}

/**
 * get local mock data
 * @param api
 * @param load
 * @param isYaml
 * @returns {Promise<unknown>}
 */
function getLocalData(api, load, isYaml) {
  return new Promise((resolve, reject) => {
    const url = fmtApiUrl(api, isYaml)
    load(url)
      .then(({ status, data }) => {
        if (status === 200) {
          if (/<!doctype/i.test(data)) {
            throw new Error(`${url} file does not exist`)
          }
          resolve(data)
        } else {
          throw new Error(`Failed to get ${api} data, status code: ${status}`)
        }
      })
      .catch((err) => {
        if (!isYaml && /code\s+404/.test(err.message)) {
          getLocalData(api, load, true)
            .then((res) => {
              /* eslint-disable */
              if ($nuxt.$ui.isString(res)) {
                res = YAML.parse(res)
              }
              resolve(res)
            })
            .catch(() => {
              reject(err)
            })
          return
        }
        reject(err)
      })
  })
}
