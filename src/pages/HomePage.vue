<template>
  <nav>
    <div class="navigation-bar">
      <div class="navigation-bar-left">
        <h1>Video Steaming Application</h1>
        <uploader v-if="store.role === Permission.admin" />
      </div>
      <div class="navigation-bar-right">
        <img src="/vite.svg" alt="user avatar">
        <span class="navigation-bar-username">{{ store.username }}</span>
        <button @click="onClickLogout" class="logout-button">
          Log out
        </button>
      </div>
    </div>
  </nav>
  <main>
    <div class="left-pane">
      <player />
      <div class="comments"></div>
    </div>
    <div class="right-pane">
      <playlist />
    </div>
  </main>
  <footer>
    Built with ❤️ by&nbsp;<a href="https://reyshawn.com" target="_blank">Reshawn</a>
  </footer>
</template>

<script setup lang="ts">
import playlist from '../components/playlist.vue'
import player from '../components/player.vue'
import uploader from '../components/uploader.vue'
import { userStore } from '../store/UserStore';
import { onMounted } from 'vue';
import { getInfo } from '../apis/users';
import { Permission } from '../store/UserStore';

const store = userStore()

const onClickLogout = () => {
  store.removeToken()
  window.location.reload()
}

onMounted(async () => {
  try {
    const response = await getInfo()
    store.username = response.username
    store.id = response.id
    store.role = response.role
  } catch (err) {
    throw err
  }
})

</script>

<style lang="postcss">

nav {
  height: 60px;

  @apply
    border-b
    px-8
    shadow;

  .navigation-bar {
    @apply
      h-full
      w-full
      flex
      justify-between
      items-center;

    h1 {
      @apply
        text-xl
        font-semibold
        text-neutral-700
        border-r
        border-slate-200
        pr-3
        mr-3;
    }

    .logout-button {
      margin-left: auto;
      @apply
        bg-blue-900
        text-fuchsia-50
        text-sm
        px-2
        py-1
        rounded-lg;
    }

    &-left, &-right {
      @apply
        flex
        items-center;
    }

    &-right {
      & > *:not(:last-child) {
        @apply
          mr-3;
      }
    }
  }
}

main {
  height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);;
  @apply
    px-8
    flex
    justify-between
    gap-x-5;

  .left-pane{
    width: auto;

    @apply
      grow
      my-5;
  }

  .right-pane {
    width: 250px;

    @apply
      my-5
      shrink-0;
  }
}

footer {
  position: absolute;
  bottom: 0px;
  height: 60px;
  @apply
    bg-slate-100
    w-full
    flex
    items-center
    justify-center
    border-t
    font-mono
    text-xs;

  a {
    @apply
      border-transparent
      border-b
      text-teal-700
      hover:border-b
      hover:border-teal-700;
  }
}

@media (min-width: 1200px) { 
  main, .navigation-bar {
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
  }
}

</style>