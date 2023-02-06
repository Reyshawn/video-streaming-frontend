const baseUrl = 'http://localhost:3000'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/me'
}

export const videos = {
  upload: baseUrl + '/api/video/upload',
  all: baseUrl + '/videos'
}