<template>
  <div class="player">
    <h2 class="video-title">This is video title</h2>
  </div>
  
</template>

<script setup lang="ts">
</script>

<style lang="postcss">

.player {
  height: 100%;
  @apply
    border
    rounded-lg
    shadow-sm
    px-2;

  .video-title {
    @apply
      font-semibold
      border-b
      py-1;
  }
}

</style>