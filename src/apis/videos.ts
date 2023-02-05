import { videos } from "./url";
import request from './interceptor'

export function upload(formData: FormData): Promise<any> {
  return request({
    url: videos.upload,
    method: 'post',
    data: formData
  })
}