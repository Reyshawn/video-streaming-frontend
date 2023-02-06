const baseUrl = 'http://localhost:3000'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/user'
}

export const videos = {
  upload: baseUrl + '/api/video/upload'
}