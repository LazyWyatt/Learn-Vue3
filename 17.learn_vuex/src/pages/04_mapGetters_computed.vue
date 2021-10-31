<template>
  <div>
    <h1>Home: {{$store.state.counter}}</h1>
    <hr>

    <p>總價:{{ $store.getters.totalPrice }}</p>
    <p>總價:{{ $store.getters.totalPriceCounterGreaterN(3) }}</p>

    <hr>
    <h2>{{ nameInfo }}</h2>
    <h2>{{ $store.getters.nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>{{ heightInfo }}</h2>
    <h2>{{ sAgeInfo }}</h2>
  </div>
</template>

<script>
  import { useState } from '../hooks/useState';
  import {  mapGetters } from 'vuex';
  export default {
    computed: {
      nameInfo() {
        return this.$store.getters.nameInfo
      },
      // ...mapGetters(["nameInfo", "ageInfo", "heightInfo"])
      ...mapGetters({
        sNameInfo: "nameInfo",
        sAgeInfo : "ageInfo"
      })
    },
    setup() {
      
    }
  }
</script>

<style scoped>

</style>