<template>
  <div>
    <h2>App</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from './Helloworld.vue';
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>