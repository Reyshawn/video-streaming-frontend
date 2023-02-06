<template>
  <div class="login-form-container">
    <form class="login-form register-form">
      <h1 class="login-form-title">Register</h1>
      <div class="login-form-field register-form-field required">
        <label for="">Username</label>
        <input type="text" v-model="username">
      </div>
      <div class="login-form-field register-form-field required">
        <label for="">Password</label>
        <input type="password" v-model="password">
      </div>
      <div class="login-form-field register-form-field required">
        <label for="">Repeated Password</label>
        <input type="password" v-model="repeatedPassword">
      </div>
      <div class="login-form-buttons">
        <button @click.prevent="onClickRegister" class="sign-in-button">Register</button>
        <span class="login-form-buttons-register-tips">
          Already have an account?
          <button class="register-button" @click.prevent="onClickSignIn">
            Sign in
          </button>
        </span>
      </div>
    </form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { register } from '../apis/users';
import { router } from '../routes';
import { userStore } from '../store/UserStore';

const username = ref('')
const password = ref('')
const repeatedPassword = ref('')
const store = userStore()

const onClickRegister = async () => {
  if (username.value === '') {
    alert("Username is empty.")
    return
  }

  if (password.value !== '' && password.value !== repeatedPassword.value) {
    alert("Passwords don't match.")
    return
  }

  try {
    const response = await register(username.value, password.value)
    const accessToken = response.access_token
    store.setToken(accessToken)
    router.push({ path: '/', replace: true })
  } catch (err) {
    throw err
  }
}


const onClickSignIn = () => {
  router.push({ path: '/login' }) 
}

</script>

<style lang="postcss">
.register-form {

  &-field {
    @apply
      flex-col;

    label {
      @apply
        text-sm;
    }

    input {
      width: 100%;
      @apply
        text-sm;
    }

    &.required {
      label::before {
        content: '*  ';
        @apply
          text-red-500;
      }
    }
  }
}

</style>


