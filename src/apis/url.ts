const baseUrl = '/api'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/me'
}

export const videos = {
  upload: baseUrl + '/s/video/upload',
  all: baseUrl + '/videos',
  stream: baseUrl + '/s/video/stream'
}