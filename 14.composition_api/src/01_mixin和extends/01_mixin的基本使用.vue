<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import {demoMixin} from './mixins/demoMixin'

  export default {
    mixins: [demoMixin]
  }
</script>

<style scoped>

</style>
