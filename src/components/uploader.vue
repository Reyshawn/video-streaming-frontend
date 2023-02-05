<template>
  <form class="upload-form">
    <button class="upload-button" @click.prevent="chooseFile">Upload</button>
    <input type="file" ref="fileInput" @change="onFileChange" accept="video/*">
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { upload } from '../apis/videos';

const fileInput = ref<HTMLInputElement|null>(null)

const chooseFile = () => {
  fileInput.value?.click()
}

const onFileChange = async (event: any) => {
  const file = event.target.files[0]
  if (file == null) {
    return
  }

  const fd = new FormData()
  fd.append('file', file)

  try {
    await upload(fd)
    
  } catch (err) {
    throw err
  }
}

</script>

<style lang="postcss">

.upload-button {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  @apply
    border-2
    border-blue-900
    text-sm
    px-2
    rounded-lg
    hover:bg-blue-900
    hover:text-fuchsia-50;
}

.upload-form {
  input {
    @apply
      hidden;
  }
}

</style>