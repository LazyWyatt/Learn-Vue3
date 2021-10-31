<template>
  <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
</template>

<script>
  import { ref } from "vue";
  export default {
    setup() {
      const timestamp = 1628975043;


      return {
        timestamp
      }
    }
  }
</script>

<style scoped>

</style>