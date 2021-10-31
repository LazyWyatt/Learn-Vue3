<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <p class="title" ref="titleRef">{{message}}</p>
    <button @click="addMessageContent">修改內容</button>
  </div>
</template>

<script>
  import { ref, onUpdated, nextTick } from 'vue';
  export default {
    setup() {
      const message = ref("資訊");
      const titleRef = ref(null);
      const counter = ref(0);

      const addMessageContent = () => {
        message.value += "哈哈哈"
        
      }
      const increment = () => {
        counter.value++;
      }

      nextTick(() => {
        console.log(titleRef.value.offsetHeight)
      })

      onUpdated(() => {
      })
      
      return {
        message,
        addMessageContent,
        titleRef,
        counter,
        increment
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 120px;
  }
</style>