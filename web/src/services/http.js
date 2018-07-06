import axios from 'axios'

export const http = {
  request: (method, url, data, successCb = null, errorCb = null) => {
    return axios.request({ url, data, method: method.toLowerCase() }).then(successCb).catch(errorCb)
  },
  get (url, successCb = null, errorCb = null) {
    return this.request('get', url, {}, successCb, errorCb)
  },
  post (url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb)
  },
  init: () => {
    axios.defaults.baseURL = 'api/api'

    axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL1wvYXBpXC9sb2dpbiIsImlhdCI6MTUzMDcyMTQ1MCwiZXhwIjoxNTMwNzI1MDUwLCJuYmYiOjE1MzA3MjE0NTAsImp0aSI6IlRQNUR1ekw0S1g5TU41T3UiLCJzdWIiOjU1MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9._o8y3k1jP8jUBa2wzJALWR_kvv-xHCBPcWKqBW-SK2o'}`
      return config
    })
  }
}
