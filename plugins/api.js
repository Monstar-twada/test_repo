/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2020-07-20 12:19
 */
import Axios from 'axios'
import { storage } from '~/assets/js/storage'
import { createUrlQuery } from '~/assets/js/utils'

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
      temp = storage.get(key)
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
    // handle parameter
    const _params = {
      ...params,
    }
    /* eslint-disable no-prototype-builtins */
    if (_params.hasOwnProperty('offset') || _params.hasOwnProperty('limit')) {
      api += createUrlQuery(_params, ['offset', 'limit'])
      delete _params.offset
      delete _params.limit
    }
    return new Promise((resolve, reject) => {
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
            reject(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
