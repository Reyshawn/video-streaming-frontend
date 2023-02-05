<template>
  <nav>
    <div class="navigation-bar">
      <div class="navigation-bar-left">
        <h1>Video Steaming Application</h1>
      </div>
      <div class="navigation-bar-right">
        <img src="/vite.svg" alt="user avatar">
        <span class="navigation-bar-username">kiki</span>
        <button>
          Log out
        </button>
      </div>
    </div>
  </nav>
  <main>
    this is main
  </main>
  <footer>
    this is footer
  </footer>
</template>

<script setup lang="ts">

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
        text-neutral-700;
    }

    button {
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
  outline: 1px solid teal;
}

</style>