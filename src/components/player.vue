<template>
  <div class="player">
    <h2 class="video-title">{{ videoTitle }}</h2>
    <div class="video-container">
      <video
        v-if="videoSource"
        controls
        muted="true"
        ref="videoPlayer"
        @pause="onPlayerPaused"
        @ended="onPlayerPaused"> 
        <source :src="videoSource" type="video/mp4">
      </video>
      <div v-else class="no-video-source-selected">
        <p>No videos selected.</p>
      </div>
    </div>
    
    <h2 class="video-title">Notes</h2>
    <div class="video-notes">
      😣 `Notes` feature will be released in the near future.
    </div>

  </div> 
</template>

<script setup lang="ts">
import { videos } from '../apis/url';
import { videoStore } from '../store/VideoStore';
import { computed, ref } from '@vue/reactivity';
import { saveHisotry } from '../apis/videos';
import { userStore as userStoreCreator } from '../store/UserStore';

const videoTitle = ref('')
const store = videoStore()
const userStore = userStoreCreator()
const videoPlayer = ref<HTMLVideoElement|null>(null)

const videoSource = computed(() => {
  if (store.playing == null ) {
    return ''
  }

  return videos.stream + `/${store.playing}`
})


const onPlayerPaused = async () => {
  try {
    const current = videoPlayer.value?.currentTime || 0
    const duration = videoPlayer.value?.duration || 1
    const progress = current / duration
    await saveHisotry({
      userId: userStore.id!,
      videoId: store.playing!,
      progress: progress
    })
  } catch (err) {
    throw err
  }
}

store.$subscribe((mutation, state) => {
  videoPlayer.value?.load()
  const name = state.videos.filter(v => v.id === state.playing)?.[0]?.name
  videoTitle.value = name ? name.slice(0, name.lastIndexOf(".")) : ''
  
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

.no-video-source-selected {
  @apply
    relative
    border-2
    border-dashed
    aspect-video;

    p {
      transform: translate(-50%, -50%);
      @apply
        text-neutral-300
        text-4xl
        absolute
        top-1/2
        left-1/2;
    }
}

</style>