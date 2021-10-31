<template>
  <div>
    <home />
    <h1>App counter: {{counter}}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { provide, ref,readonly } from 'vue';
  import Home from './Home.vue'
  export default {
    components: {
      Home
    },
    setup() {
      const name = ref("Wyatt");
      let counter = ref(100);

      provide("name", readonly(name));
      provide("counter", readonly(counter));
      const increment = () => counter.value++

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>