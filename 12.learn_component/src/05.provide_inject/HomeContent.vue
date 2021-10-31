<template>
  <div>
    <h1>Home Content</h1>
    <p>{{name}}-{{age}}-{{length.value}}</p>
  </div>
</template>

<script>
  export default {
    inject: ["name","age","length"]
  }
</script>

<style lang="scss" scoped>

</style>