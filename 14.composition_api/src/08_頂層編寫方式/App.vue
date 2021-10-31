<template>
  <div>
    <h2>計數: {{counter}}</h2>
    <button @click="increment">+1</button>

    <Home :message="耶耶耶" @increment="getCounter" />
  </div>
</template>

<script setup>
  import { defineEmit, ref } from 'vue';
  import Home from './Home.vue'

  const counter = ref(0);
  const increment = () => counter.value++;

  const getCounter = (payload) => {
    console.log(payload);
  }

</script>

<style scoped>

</style>