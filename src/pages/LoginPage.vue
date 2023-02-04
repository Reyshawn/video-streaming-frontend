<template>
  <form class="login-form">
    <h1 class="login-form-title">Login</h1>
    <div class="login-form-field">
      <label for="">Username</label>
      <input type="text">
    </div>
    <div class="login-form-field">
      <label for="">Password</label>
      <input type="password">
    </div>
    <div class="login-form-buttons">
      <button @click.prevent="">Sign in</button>
    </div>
  </form>
</template>


<script setup lang="ts">

</script>


<style lang="postcss">

.login-form {
  margin: 20% auto 0;
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
      mt-3;

    button {
      @apply
        bg-blue-900
        text-fuchsia-50
        text-sm
        px-2
        py-1
        rounded-lg;
    }
  }
}

</style>