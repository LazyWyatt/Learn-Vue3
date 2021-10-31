<template>
  <div>
    <h1>Home</h1>
    <!-- <button @click="btnClick"></button> -->
    <p>{{ state.counter}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import {reactive} from 'vue'

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    setup(props, context) {
      const state = reactive({
        counter: 100
      })

      const increment = () => {
        state.counter ++;
        console.log(state.counter)
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>