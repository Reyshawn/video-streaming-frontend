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

export function saveHisotry(paylaod: {userId: number, videoId: number, progress: number}): Promise<any> {
  return request({
    url: videos.saveHistory,
    method: 'post',
    data: {
      ...paylaod
    }
  })
}

export function getWatchedVideos(): Promise<any> {
  return request({
    url: videos.watched,
    method: 'get'
  })
} 