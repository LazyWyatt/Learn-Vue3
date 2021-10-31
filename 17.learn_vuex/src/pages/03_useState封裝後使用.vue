<template>
  <div>
    <h1>Home: {{$store.state.counter}}</h1>
    <hr>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ height }}</p>
    <p>{{ sCounter }}</p>
    <p>{{ sName }}</p>
  </div>
</template>

<script>
  import { useState } from '../hooks/useState';
  export default {
    setup() {
      const storeState = useState(["counter", "name", "age", "height"])
      const storeState2 = useState({
        sCounter: state => state.counter,
        sName: state => state.name
      })
      
      return {
        ...storeState,
        ...storeState2,
      }
    }
  }
</script>

<style scoped>

</style>