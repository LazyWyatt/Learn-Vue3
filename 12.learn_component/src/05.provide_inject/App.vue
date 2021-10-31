<template>
  <div>
    <home></home>
    <button @click="addName">增加賦值</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import {computed} from 'vue';
  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: "wyatt",
        age: 22,
        length: computed(()=>this.names.length) //ref對象 .value
      }
    },
    data() {
      return {
        names: ["aaa","bbb","ccc"]
      }
    },
    methods: {
      addName() {
        this.names.push('wyatt')
        console.log(this.names)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>