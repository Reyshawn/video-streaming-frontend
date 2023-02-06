import { computed } from '@vue/reactivity'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const TOKEN_KEY = 'token'

export const userStore = defineStore('userStore', () => {
  const _token = ref('')

  function setToken(t: string) {
    localStorage.setItem(TOKEN_KEY, t)
    _token.value = t
  }

  function removeToken() {
    localStorage.removeItem(TOKEN_KEY)
    _token.value = ''
  }

  const token = computed(() => {
    return _token.value || localStorage.getItem(TOKEN_KEY)
  })

  return { token, setToken, removeToken }
})