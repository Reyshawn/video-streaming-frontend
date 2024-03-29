import axios from 'axios'
import { userStore } from '../store/UserStore';
import { users } from './url';
const instance = axios.create()


// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const store = userStore()
  const token = store.token
  const url = config.url
  if (url !== users.login && url !== users.register ) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.status > 199 && response.status < 300) {
    return response.data
  }

  return response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})


export default instance