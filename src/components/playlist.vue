<template>
  <div class="playlist">
    <h2 class="playlist-title">Playlist</h2>
    <ul>
      <li v-for="(item, index) in videos" class="playlist-item">
        <span>{{ item.title }}</span>
        <div>
          <svg class="playlist-item-icon" fill="#000000" viewBox="0 0 297 297">
            <path d="M148.5,0C66.486,0,0,66.486,0,148.5S66.486,297,148.5,297S297,230.514,297,148.5S230.514,0,148.5,0z M202.79,161.734
	          l-78.501,45.322c-2.421,1.398-5.326,2.138-8.083,2.138c-8.752,0-16.039-7.12-16.039-15.872v-90.645
	          c0-8.752,7.287-15.872,16.039-15.872c2.758,0,5.579,0.739,8.001,2.138l78.542,45.322c4.966,2.867,7.951,8.001,7.951,13.734
	          S207.756,158.867,202.79,161.734z"/>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const videos = ref([
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
  { title: '【陈一发儿】随便聊聊：这是可以说的吗？我现在越来越少逛b站是因为……oo' },
  { title: 'Mac mini 评测：从没用过 Mac，mini 好用吗？' },
  { title: 'Best way to create GraphQL API ?? | NestJS GraphQL Tutorial' },
])

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
      font-semibold
      border-b
      py-1
      mx-2;
  }

  & > ul {
    overflow-y: scroll;
    @apply
      text-sm
      divide-dashed
      divide-y
      px-2;
    li {
      @apply
        py-2
        flex
        items-center
        cursor-pointer
        hover:bg-blue-900
        hover:text-slate-50;

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
    }
  }
}

</style>