<template>
  <div class="playlist">
    <h2 class="playlist-title">
      <span
        :class="{selected: currentPlaylist === PlaylistType.all}" 
        @click="currentPlaylist = PlaylistType.all">
        Playlist
      </span>
      <span
        :class="{selected: currentPlaylist === PlaylistType.watched}" 
        @click="currentPlaylist = PlaylistType.watched">
        Watched
      </span>
    </h2>
    <ul>
      <li
        v-for="(item, index) in store.videos"
        class="playlist-item"
        :class="{selected: store.playing === item.id}"
        @click="play(item)">
        <div class="playlist-item-inner">
          <span>{{ item.name }}</span>
          <div>
            <svg class="playlist-item-icon" fill="#000000" viewBox="0 0 297 297">
              <path d="M148.5,0C66.486,0,0,66.486,0,148.5S66.486,297,148.5,297S297,230.514,297,148.5S230.514,0,148.5,0z M202.79,161.734
	            l-78.501,45.322c-2.421,1.398-5.326,2.138-8.083,2.138c-8.752,0-16.039-7.12-16.039-15.872v-90.645
	            c0-8.752,7.287-15.872,16.039-15.872c2.758,0,5.579,0.739,8.001,2.138l78.542,45.322c4.966,2.867,7.951,8.001,7.951,13.734
	            S207.756,158.867,202.79,161.734z"/>
            </svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { videoStore, Video } from '../store/VideoStore';
import { getAllVideos, getWatchedVideos } from '../apis/videos';

enum PlaylistType {
  all,
  watched
}

const store = videoStore()
const currentPlaylist = ref(PlaylistType.all)

const refreshPlaylist = async () => {
  try {
    let response: any = []
    switch (currentPlaylist.value) {
      case PlaylistType.all:
      response = await getAllVideos()
      break
      case PlaylistType.watched:
      response = await getWatchedVideos()
      break
      default:
      break
    }

    store.videos = response
  } catch (err){
    throw err
  }
}

const play = (video: Video) => {
  store.playing = video.id
}

onMounted(() => {
  refreshPlaylist()
})

watch(currentPlaylist, () => {
  refreshPlaylist()
})

</script>

<style lang="postcss">

.playlist {
  height: 100%;
  @apply
    border
    rounded-lg
    shadow-sm
    flex
    flex-col;

  &-title {
    @apply
      border-b
      py-1
      mx-2
      cursor-pointer;

    span.selected {
      @apply 
        font-semibold;
    }

    & > *:not(:last-child) {
      @apply
        mr-3
        pr-3
        border-r
    }
  }

  & > ul {
    overflow-y: scroll;
    @apply
      text-sm;
    .playlist-item {
      @apply
        px-2
        cursor-pointer
        text-neutral-700
        hover:bg-blue-900
        hover:text-slate-50;

        &-inner {
          @apply
            py-2
            flex
            items-center
            justify-between;
        }

        span {
          @apply
            whitespace-nowrap
            text-ellipsis
            overflow-hidden;
        }

        .playlist-item-icon {
          margin-left: 5px;
          width: 20px;
          height: 20px;
        }

      &:hover {
        svg {
          fill: #facc15;
        }
      }

      &.selected {
        @apply
          bg-yellow-400;

        &:hover {
          @apply
            text-neutral-700;
          svg {
            fill: #000000;
          }
        }
      }
    }

    & > *:not(:last-of-type) {
      .playlist-item-inner {
        @apply
          border-b
          border-dashed;
      }
    }
  }
}

</style>