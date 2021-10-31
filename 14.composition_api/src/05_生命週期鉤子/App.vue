<template>
  <div>
    <p>{{counter}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { onMounted, onUpdated, onUnmounted, ref } from 'vue';
  export default {
    setup() {
      const counter = ref(0)

      onMounted(() => {
        console.log("App Mounted")
      })
      onUpdated(() => {
        console.log("App onUpdated")
      })
      onUnmounted(() => {
        console.log("App onUnmounted")
      })

      const increment = () => {
        counter.value ++;
      }
      
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>