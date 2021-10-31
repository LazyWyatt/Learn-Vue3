<template>
  <div>
    <h2>Counter: {{counter}}</h2>
    <counter-operation @add="addOne" @sub="subOne" @addN="addNum"></counter-operation>
  </div>
</template>

<script>
  import CounterOperation from './CounterOperation.vue'
  export default {
    components:{
      CounterOperation
    },
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      addOne() {
        this.counter ++
      },
      subOne() {
        this.counter --
      },
      addNum(num, name, age) {
        this.counter += num
        console.log(name, age)
      }
    }
  }
</script>

<style scoped>

</style>