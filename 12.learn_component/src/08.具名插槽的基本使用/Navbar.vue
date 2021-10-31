<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="addtion">
      <slot v-bind:name="name"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String
    }
    // data() {
    //   return {
    //     name: 'wyatt'
    //   }
    // }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
  }
  .left, .right,.center, .addtion {
    height: 50px;
  }

  .left,.right {
    width: 80px;
    background-color: #999;
  }

  .center {
    flex: 1;
    background-color: #555;
  }
</style>