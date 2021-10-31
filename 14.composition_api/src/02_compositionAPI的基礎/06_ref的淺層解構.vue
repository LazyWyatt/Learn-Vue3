<template>
  <div>
    <h1>Home</h1>
    <!-- <button @click="btnClick"></button> -->
    <!-- 在template模板中ref物件，會自動進行解包 -->
    <p>{{ counter }}</p>
    <!-- ref的解包只能是一個淺層解包(info是一個普通的JS物件) -->
    <p>{{ info.counter }}</p>
    <!-- 如果最外層包裹的是一個reactive物件，則內部的ref可以解包 -->
    <p>{{ reactiveInfo.counter }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    //reactive一定要是物件或是陣列
    setup(props, context) {
      const counter = ref(100);

      const info = {
        counter
      }

      const reactiveInfo = reactive({
        counter
      })

      const increment = () => {
        counter.value++
      }

      return {
        counter,
        info,
        reactiveInfo,
        increment
      }
    }
  }
</script>

<style scoped>

</style>