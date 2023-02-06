import { videos } from "./url";
import request from './interceptor'

export function upload(formData: FormData): Promise<any> {
  return request({
    url: videos.upload,
    method: 'post',
    data: formData
  })
}

export function getAllVideos(): Promise<any> {
  return request({
    url: videos.all,
    method: 'get'
  })
}