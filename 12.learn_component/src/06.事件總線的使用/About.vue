<template>
  <div>
    <h1>about</h1>
    <button @click="btnClick">按鈕點擊</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus'

  export default {
    methods: {
      btnClick() {
        console.log("about按鈕的點擊")
        emitter.emit("wyatt", "參數")
        emitter.emit("special", "參數")
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>