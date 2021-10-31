<template>
  <div>
    <h1>Home Content</h1>
  
  </div>
</template>

<script>
  import emitter from './utils/eventbus'
  export default {
   created() {
     emitter.on("wyatt", (info) => {
       console.log(info);
     })

     emitter.on("wayne", (info) => {
       console.log(info);
     })

     emitter.on("*", (type, info) => {
       console.log(type, info);
     })
   }
  }
</script>

<style lang="scss" scoped>

</style>