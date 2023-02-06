import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Video {
  id: number
  mimetype: string
  name: string
  notes: string
  size: number
}

export const videoStore = defineStore('videoStore', () => {
  const videos = ref<Video[]>([])
  const playing = ref<number|null>(null)

  return {
    videos,
    playing
  }
})