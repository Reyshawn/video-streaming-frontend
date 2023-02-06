const baseUrl = '/api'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/me'
}

export const videos = {
  upload: baseUrl + '/api/video/upload',
  all: baseUrl + '/videos',
  stream: baseUrl + '/api/video/stream'
}