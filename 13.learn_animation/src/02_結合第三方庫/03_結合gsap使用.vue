<template>
  <div class="app">
    <button @click="toggle">顯示/隱藏</button>

    <transition v-on:enter="enter"
                v-on:leave="leave"
                :css="false">
      <h2 v-if="isShow">Hello World</h2>
    </transition>

  </div>
</template>

<script>
  import gsap from 'gsap'
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
      enter(el, done) {
        console.log("enter");
        // gsap.to(target, {})
        gsap.from(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      },
      leave(el, done) {
        gsap.to(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
        console.log("leave");
      }
    },
  }
</script>

<style scoped>
</style>
