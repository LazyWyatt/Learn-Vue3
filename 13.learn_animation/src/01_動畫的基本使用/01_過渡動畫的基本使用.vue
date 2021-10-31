<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition name="wyatt">
      <h2 class="title" v-show="isShow">Hello World!</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped>
  /* .wyatt-enter-from,
  .wyatt-leave-to {
    opacity: 0;
  }

  .wyatt-enter-to,
  .wyatt-leave-from {
    opacity: 1;
  }

  .wyatt-enter-active,
  .wyatt-leave-active {
    transition: opacity 2s ease;
  } */
  .app {
    width: 200px;
    margin: auto;
  }
  .title {
    display: inline-block;
  }

</style>
