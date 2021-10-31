<template>
  <div>
    <h2>Login</h2>
    <button @click="loginClick"></button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
  export default {
    setup() {
      const router = useRouter();

      const loginClick = () => {
        router.push({
          path: "/home"
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>