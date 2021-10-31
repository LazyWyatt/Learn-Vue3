<template>
  <div>
    <h3>{{readonlyInfo.name}}</h3>
    <button @click="UpdateName">改名</button>
  </div>
</template>

<script>
  import { ref, readonly } from 'vue'

  export default {

    setup(props, context) {

      const info = {name: 'wyatt'}
      const readonlyInfo = readonly(info)

      const UpdateName = () => {
        readonlyInfo.name = 'new Name'
      }


      return {
        readonlyInfo,
        UpdateName
      }
    }
  }
</script>

<style scoped>

</style>