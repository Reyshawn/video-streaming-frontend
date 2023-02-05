import { users } from "./url";
import request from './interceptor'

export function login(username: string, password: string): Promise<any> {
  return request({
    url: users.login,
    method: 'post',
    data: {
      username,
      password
    }
  })
}