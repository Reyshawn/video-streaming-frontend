const baseUrl = 'http://localhost:3000'
const videoUrl = 'http://localhost:3001'

export const users = {
  login: baseUrl + '/login',
  register: baseUrl + '/register',
  getInfo: baseUrl + '/user'
}

export const videos = {
  upload: videoUrl + '/upload'
}