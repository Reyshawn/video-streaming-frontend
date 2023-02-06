<template>
  <div class="login-form-container">
    <form class="login-form">
      <h1 class="login-form-title">Login</h1>
      <div class="login-form-field">
        <label for="">Username</label>
        <input type="text" v-model="username">
      </div>
      <div class="login-form-field">
        <label for="">Password</label>
        <input type="password" v-model="password">
      </div>
      <div class="login-form-buttons">
        <button @click.prevent="onClickSignIn" class="sign-in-button">Sign in</button>
        <span class="login-form-buttons-register-tips">
          Don't have an account?
          <button class="register-button" @click.prevent="onClickRegister">
            Register
          </button>
        </span>
      </div>
    </form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../apis/users';
import { router } from '../routes';
import { userStore } from '../store/UserStore';

const username = ref('')
const password = ref('')
const store = userStore()

const onClickSignIn = async () => {
  try {
    const response = await login(username.value, password.value)
    const accessToken = response.access_token
    store.setToken(accessToken)
    router.push({ path: '/', replace: true })
  } catch (err) {
    alert('Username or password could be wrong.')
    throw err
  }
}

const onClickRegister = () => {
  router.push({ path: '/register' }) 
}

</script>


<style lang="postcss">

.login-form-container {
  padding-top: 15%;
  background-color: white;
  @apply
    w-full
    h-full;
}


.login-form {
  margin: 0 auto 0;
  width: 300px;
  @apply
    border
    rounded-md
    shadow-sm
    px-3
    py-3
    text-neutral-800;

  &-title {
    @apply
      font-semibold
      mb-2
      text-2xl 
      text-center
      text-neutral-800;
  }

  &-field {
    @apply
      flex
      justify-between
      w-full
      mb-2;
    
    input {
      width: 70%;
      @apply
        font-mono
        border-b;
    }
  }

  &-buttons {
    @apply
      mt-3
      flex
      items-center
      justify-between;

    .sign-in-button {
      @apply
        bg-blue-900
        text-fuchsia-50
        text-sm
        px-2
        py-1
        rounded-lg;
    }

    .register-button {
      @apply
        font-semibold
        text-red-700;
    }

    &-register-tips {
      @apply  
        text-xs;
    }
  }
}

</style>