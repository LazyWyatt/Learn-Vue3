<template>
  <!-- <tick/> -->
  <h2>{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <Home></Home>
</template>

<script>
import Home from './pages/Home.vue'
import Tick from './App_nexttick.vue'
export default {
  name: 'App',
  components: {
    Home,
    Tick
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
}
</script>

<style>
</style>
