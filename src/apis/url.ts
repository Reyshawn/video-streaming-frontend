const baseUrl = '/api'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/me'
}

export const videos = {
  upload: baseUrl + '/s/video/upload',
  stream: baseUrl + '/s/video/stream',
  saveHistory: baseUrl + '/history',
  all: baseUrl + '/videos/all',
  watched: baseUrl + '/videos/watched'
}