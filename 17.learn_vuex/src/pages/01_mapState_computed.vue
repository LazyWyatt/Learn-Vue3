<template>
  <div>
    <h1>Home: {{$store.state.counter}}</h1>
    <h1>Home: {{sCounter}}</h1>
    <h1>Home: {{name}}</h1>
    <h1>Home: {{age}}</h1>
    <h1>Home: {{height}}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      // sCounter() {
      //   return this.$store.state.counter
      // },
      //其他計算屬性，從state獲取
      // ...mapState(["counter", "name", "age", "height"])
      ...mapState({
        sCounter: state => state.counter,
        sName: state => state.name
      })
    }
  }
</script>

<style scoped>

</style>