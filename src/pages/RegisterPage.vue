<template>
  <div class="login-form-container">
    <form class="login-form register-form">
      <h1 class="login-form-title">Register</h1>
      <div class="login-form-field register-form-field">
        <label for="">Name</label>
        <input type="text" v-model="name" placeholder="Type name">
      </div>
      <div class="login-form-field register-form-field required">
        <label for="">Username</label>
        <input type="text" v-model="username" placeholder="Type username">
      </div>
      <div class="login-form-field register-form-field required">
        <label for="">Password</label>
        <input type="password" v-model="password" placeholder="Type password">
      </div>
      <div class="login-form-field register-form-field required">
        <label for="">Repeated Password</label>
        <input type="password" v-model="repeatedPassword" placeholder="Repeat password for cofirmation">
      </div>
      <div class="login-form-buttons">
        <button @click.prevent="" class="sign-in-button">Register</button>
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
import { login } from '../apis/users';
import { router } from '../routes';
import { userStore } from '../store/UserStore';

const name = ref('')
const username = ref('')
const password = ref('')
const repeatedPassword = ref('')
const store = userStore()

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


