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
   * upload
   * @param file
   * @param params
   * @returns {Promise<unknown>}
   */
  upload(file, params = {}) {
    const token = $nuxt.$store.state.auth.token

    const formData = new FormData()
    formData.append('filename', file.raw.file)
    formData.append('content-type', file.data.type)

    return new Promise((resolve, reject) => {
      const configs = {
        url: params.url || '/api/v1/tempfile',
        method: params.method || 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        data: formData,
        onUploadProgress: ({ loaded, total }) => {
          if (typeof params.onProgress === 'function') {
            params.onProgress(Math.floor((100 * loaded) / total))
          }
        },
      }
      Axios.request(configs)
        .then((res) => {
          if (res.status === 200) {
            if (/<!doctype/i.test(res.data)) {
              throw new Error(`${configs.url} request failed!`)
            }
            resolve(res.data.s3TempFile || {})
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

    // get the token from the store
    const token = $nuxt.$store.state.auth.token

    const { hasOwn, createUrlQuery } = $nuxt.$ui
    // handle parameter
    const _params = {
      ...params,
    }
    /* eslint-disable no-prototype-builtins */
    if (
      hasOwn(_params, 'offset') ||
      hasOwn(_params, 'limit') ||
      hasOwn(_params, 'sort')
    ) {
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
          // set up the token here for header
          Authorization: `Bearer ${token}`,
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
