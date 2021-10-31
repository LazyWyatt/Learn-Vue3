<template>
  <div>
    <h1>Home</h1>
    <!-- <button @click="btnClick"></button> -->
    <p>{{ counter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    //reactive一定要是物件或是陣列
    setup(props, context) {
      const counter = ref(100);

      const increment = () => {
        counter.value++
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