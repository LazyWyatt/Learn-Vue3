<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
  export default {
    // emits:["add","sub","addN"],
    emits: {
      add: null,
      sub: null,
      addN: (num, name, age) => {
        console.log(num, name, age)
        if(num > 10){
          return true
        }
        return true
      }
    },
    data(){
      return {
        num: 0
      }
    },
    methods: {
      increment() {
        console.log('increment');
        this.$emit('add');
      },
      decrement() {
        console.log('decrement');
        this.$emit('sub');
      },
      incrementN() {
        this.$emit('addN', this.num, 'wyatt', 23)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>