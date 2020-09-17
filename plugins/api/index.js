/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-20 12:19
 */
import Axios from 'axios'
import { getMockData } from './mock-data'

// https://github.com/axios/axios#request-config
// Axios.defaults.withCredentials = true

/**
 * Request Api
 */
export class RequestApi {
  constructor(headers = []) {
    this.headers = headers
  }

  /**
   * get request headers
   */
  getHeaders() {
    let temp
    return this.headers.reduce((prev, key) => {
      /* eslint-disable */
      temp = $nuxt.$ui.getCache(key)
      if (temp) {
        prev[key] = temp
      }
      return prev
    }, {})
  }

  post(api, params, headers) {
    return this._handleRequest(api, params, headers, 'POST')
  }

  get(api, params, headers) {
    return this._handleRequest(api, params, headers, 'GET')
  }

  put(api, params, headers) {
    return this._handleRequest(api, params, headers, 'PUT')
  }

  delete(api, params, headers) {
    return this._handleRequest(api, params, headers, 'DELETE')
  }

  /**
   * handle request
   * @param api
   * @param params Request Data
   * @param headers Request Headers
   * @param method
   * @returns {Promise<unknown>}
   * @private
   */
  _handleRequest(api, params, headers, method) {
    /* eslint-disable */
    const { hasOwn, createUrlQuery } = $nuxt.$ui
    // handle parameter
    const _params = {
      ...params,
    }
    /* eslint-disable no-prototype-builtins */
    if (hasOwn(_params, 'offset') || hasOwn(_params, 'limit') || hasOwn(_params, 'sort')) {
      api += createUrlQuery(_params, ['offset', 'limit', 'sort'])
      delete _params.offset
      delete _params.limit
      delete _params.sort
    }
    return new Promise((resolve, reject) => {
      if (process.env.useMockData) {
        getMockData(api, params, Axios.get, method).then(resolve).catch(reject)
        return
      }
      Axios.request({
        url: '/api' + api,
        method,
        headers: {
          ...this.getHeaders(),
          ...headers,
          // 一時的テストのため
          'X-CARS-MANAGER': 'textX-CARS-MANAGER',
        },
        data: _params,
      })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            throw res
          }
        })
        .catch((err) => {
          if (err.response) {
            reject(err.response.data)
            return
          }
          /* eslint-disable prefer-promise-reject-errors */
          reject({
            message: err.message,
            errors: [err],
          })
        })
    })
  }
}
