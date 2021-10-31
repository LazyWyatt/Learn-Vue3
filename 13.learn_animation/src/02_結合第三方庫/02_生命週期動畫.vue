<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
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
      beforeEnter() {
        console.log(beforeEnter);
      },
      enter() {
        console.log(enter);
      },
      afterEnter() {
        console.log(afterEnter);
      },
      beforeLeave() {
        console.log(beforeLeave);
      },
      leave() {
        console.log(leave);
      },
      afterLeave() {
        console.log(afterLeave);
      },
    },
  }
</script>

<style scoped>
</style>
