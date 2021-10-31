<template>
  <div>
    <hr>
    <h2>當前計數: {{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="add">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({n: 10})">+10</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'; 
  import { INCREMENT_N } from '../store/mutation-types'
  export default {
    methods: {
      // ...mapMutations(["increment", "decrement", INCREMENT_N]),
      // ...mapMutations({
      //   add: "increment"
      // }),
      // addTen() {
      //   this.increment_n({n: 10})
      // }
    },
    setup() {
      const storeMutation = mapMutations(["increment", "decrement", INCREMENT_N])
      return {
        ...storeMutation
      }
    }
  }
</script>

<style scoped>

</style>