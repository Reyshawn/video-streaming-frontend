<template>
  <div class="player">
    <h2 class="video-title">This is video title</h2>
    <div class="video-container">
      <video controls muted="true" autoplay ref="videoPlayer"> 
        <source :src="videoSource" type="video/mp4">
      </video>
    </div>
    
    <h2 class="video-title">Notes</h2>
    <div class="video-notes">
      “Leashing your dog during walks is a key to letting him know that you’re his master. I, however, am not my dog’s master. My dog is my equal, and we are both masters of our own destinies.”
      “Leashing your dog during walks is a key to letting him know that you’re his master. I, however, am not my dog’s master. My dog is my equal, and we are both masters of our own destinies.”
      “Leashing your dog during walks is a key to letting him know that you’re his master. I, however, am not my dog’s master. My dog is my equal, and we are both masters of our own destinies.”
      “Leashing your dog during walks is a key to letting him know that you’re his master. I, however, am not my dog’s master. My dog is my equal, and we are both masters of our own destinies.”
      “Leashing your dog during walks is a key to letting him know that you’re his master. I, however, am not my dog’s master. My dog is my equal, and we are both masters of our own destinies.”
    </div>

  </div> 
</template>

<script setup lang="ts">
import { videos } from '../apis/url';
import { videoStore } from '../store/VideoStore';
import { computed, ref } from '@vue/reactivity';


const store = videoStore()
const videoPlayer = ref<HTMLVideoElement|null>(null)

const videoSource = computed(() => {
  if (store.playing == null ) {
    return ''
  }

  return videos.stream + `/${store.playing}`
})

store.$subscribe((mutation, state) => {
  videoPlayer.value?.load()
})

</script>

<style lang="postcss">

.player {
  height: 100%;
  @apply
    border
    rounded-lg
    shadow-sm
    px-2
    flex
    flex-col;

  .video-title {
    @apply
      font-semibold
      border-b
      py-1;
  }

  .video-container {
    outline: 1px solid teal;
    @apply
      my-4
      mx-3;
    video {
      @apply
        w-full;
    }
  }

  .video-notes {
    overflow-y: scroll;
  }
}

</style>