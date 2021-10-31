<template>
  <div>
    <h2>{{message}}</h2>
    <home></home>
  </div>
</template>

<script>
  import Home from './extends/Home.vue'

  export default {
    components: {
      Home
    }
  }
</script>

<style scoped>

</style>
