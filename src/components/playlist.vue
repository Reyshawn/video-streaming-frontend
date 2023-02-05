<template>
  <div class="playlist">
    <h2 class="playlist-title">Playlist</h2>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">

.playlist {
  height: 100%;
  @apply
    border
    rounded-lg
    shadow-sm
    px-2;


  &-title {
    @apply
      font-semibold
      border-b
      py-1;
  }
}

</style>