<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition name="wyatt" mode="in-out">
      <h2 class="title" v-if="isShow">Hello World!</h2>
      <h2 class="title" v-else>這是第二行</h2>
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
  .app {
    width: 200px;
    margin: auto;
  }
  .title {
    display: inline-block;
  }

  /* transition */
  .wyatt-enter-from,
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
  }


  /* animation */
  .wyatt-enter-active {
    animation: bounce 1s ease ;
  }

  .wyatt-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
