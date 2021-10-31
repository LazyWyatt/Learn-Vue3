<template>
  <div>
    <hr>
    <h2> root: {{$store.state.rootCounter}} </h2>
    <h2> home: {{$store.state.home.homeCounter}} </h2>
    <h2> user: {{$store.state.user.userCounter}} </h2>
    <button @click="homeIncrement">Mutations: home+1</button>
    <button @click="homeIncrementAction">Actions: home+1</button>
    <hr>
    <h2> {{ $store.getters["home/doubleHomeCounter"]}}</h2>
  </div>
</template>

<script>
  export default {
    methods: {
      increment(){
        this.$store.commit("increment");
      },
      homeIncrement() {
        this.$store.commit("home/increment");
      },
      homeIncrementAction() {
        this.$store.dispatch("home/incrementAction")
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