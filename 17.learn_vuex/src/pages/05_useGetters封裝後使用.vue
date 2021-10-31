<template>
  <div>
    <hr>
    <h2>{{nameInfo}}</h2>
  </div>
</template>

<script>
  import { mapGetters, useGetters } from '../hooks/useGetters';
  
  export default {
    setup() {
      const storeGetters = useGetters(["nameInfo", "ageInfo", "heightInfo"])

      return {
        ...storeGetters
      }
    }
  }
</script>

<style scoped>

</style>