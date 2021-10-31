<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition name="wyatt" mode="in-out" :appear="true">
      <component :is="isShow ? 'home': 'about'"></component>
    </transition>
  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  export default {
    components: {
      Home,
      About
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
