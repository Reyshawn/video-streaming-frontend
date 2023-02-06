import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Video {
  id: number
  mimetype: string
  name: string
  notes: string
  size: number
  url: string
}

export const videoStore = defineStore('videoStore', () => {
  const videos = ref<Video[]>([])
  const playing = ref('')


  return {
    videos,
    playing
  }
})