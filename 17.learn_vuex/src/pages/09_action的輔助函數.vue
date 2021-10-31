<template>
  <div>
    <hr>
    <h2>當前計數: {{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import axios from 'axios';
  export default {
    methods: {
      // ...mapActions(["incrementAction", "decrementAction"]),
      // ...mapActions({
      //   add: "incrementAction",
      //   sub: "decrementAction"
      // })
    },
    mounted() {
    },
    setup() {
      const actions = mapActions(["incrementAction","decrementAction"]);
      const actions2 = mapActions({
        add: "incrementAction",
        sub: "decrementAction"
      })
      return {
        ...actions,
        ...actions2
      }
    }
  }
</script>

<style scoped>

</style>