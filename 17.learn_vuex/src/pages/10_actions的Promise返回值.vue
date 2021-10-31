<template>
  <div>
    <hr>
    <h2>當前計數: {{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  export default {
    setup() {
      const store = useStore();

      onMounted(() => {
        const promise = store.dispatch("getHomeMultidata");
        promise.then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      })

      return {
      
      }
    }
  }
</script>

<style scoped>

</style>