<template>
  <div class="playlist">
    <h2 class="playlist-title">Playlist</h2>
    <ul>
      <li v-for="(item, index) in videos" class="playlist-item">
        <span>{{ item.title }}</span>
        <img class="playlist-item-icon" src="/play.svg" alt="">
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
    shadow-sm;

  &-title {
    @apply
      font-semibold
      border-b
      py-1
      mx-2;
  }

  & > ul {
    height: 500px;
    max-height: 500px;
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

        img {
          margin-left: 5px;
          width: 20px;
          height: 20px;
        }
    }
  }
}

</style>