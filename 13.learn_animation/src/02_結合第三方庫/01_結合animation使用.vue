<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition name="wyatt" mode="in-out" :appear="true">
      <h2 v-if="isShow">Hello World</h2>
    </transition>

    <transition enter-active-class="animate__animated animate__rubberBand"
                leave-active-class="animate__animated animate__flipInY">
      <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    components: {
    },
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
  .wyatt-enter-active {
    animation: bounceInUp 1s;
  }
  .wyatt-leave-active {
    animation: bounceInUp 1s reverse;
  }

  .animate__flipInY {
    animation-direction: reverse;
  }
</style>
