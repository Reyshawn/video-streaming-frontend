import { computed } from '@vue/reactivity'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const TOKEN_KEY = 'token'


export enum Permission {
  normal,
  admin
}

export const userStore = defineStore('userStore', () => {
  const _token = ref('')
  const username = ref('')
  const role = ref(Permission.normal)
  const id = ref<number|null>(null)

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

  return {
    token,
    username,
    role,
    id,
    setToken,
    removeToken
  }
})