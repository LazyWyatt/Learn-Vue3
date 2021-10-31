<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import About from './About.vue';
  import {computed} from 'vue';
  export default {
    components: {
      Home,
      About
    },
    data() {
      return {
        names: ["aaa","bbb","ccc"]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>