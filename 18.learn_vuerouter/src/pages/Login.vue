<template>
  <div>
    <h2>Login</h2>
    <button @click="loginClick">登入</button>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
import router from '../router';

  export default {
    setup() {
      const route = useRouter();
      const loginClick = () => {
        window.localStorage.setItem("token", "wyatt");
        router.push({
          path: "/home"
        })
      }
      return {
        loginClick,
      }
    }
  }
</script>

<style scoped>

</style>