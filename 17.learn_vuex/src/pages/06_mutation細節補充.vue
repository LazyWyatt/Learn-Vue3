<template>
  <div>
    <hr>
    <h2>當前計數: {{$store.state.counter}}</h2>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen">+10</button>
    <button @click="$store.commit('decrementN')">-1</button>
  </div>
</template>

<script>
  import { INCREMENT_N } from '../store/mutation-types'
  export default {
    methods: {
      addTen() {
        // this.$store.commit('incrementN', {
        //   n: 10,
        //   name: "wyatt",
        //   age: 23
        // }),
        //另外一種提交風格
        this.$store.commit({
          type: INCREMENT_N,
          n: 10,
          name: "wyatt",
          age: 23
        })
      }
    },
    setup() {

      return {
      }
    }
  }
</script>

<style scoped>

</style>