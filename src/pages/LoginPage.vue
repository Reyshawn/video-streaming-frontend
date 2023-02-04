<template>
  <form class="login-form">
    <h1>Login</h1>
    <div>
      <label for="">username</label>
      <input type="text">
    </div>
    <div>
      <label for="">password</label>
      <input type="text">
    </div>
  </form>
</template>


<script setup lang="ts">

</script>


<style lang="postcss" scoped>

.login-form {
  outline: 1px solid teal;
  margin: 20% auto 0;
  width: 300px;

  
}

h1 {
    text-align: center;
  }



</style>