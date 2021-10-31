<template>
  <div>
    <p>{{counter}}</p>
    <p>double counter: {{doubleCounter}}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <p>{{data}}</p>
    <button @click="changeData">更改data</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollY: {{scrollY}}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouseX: {{mouseX}}</div>
      <div class="mouse-y">mouseY: {{mouseY}}</div>
    </div>

  </div>
</template>

<script>
  import { ref, computed} from 'vue';
  import {
    useCounter,
    useTitle,
    useScrollPosition,
    useMousePosition,
    useLocalStorage
  } from './hooks'
  
  export default {
    setup() {
      const { counter, doubleCounter, increment, decrement } = useCounter();
      
      //title
      const titleRef = useTitle("新網站標題");
      setTimeout(() => {
        titleRef.value = "2秒鐘後的標題"
      }, 2000)

      //頁面滑動
      const { scrollX, scrollY } = useScrollPosition();

      //滑鼠游標
      const { mouseX, mouseY } = useMousePosition();

      //使用localStorage
      const data = useLocalStorage("info", {name: "Wyatt", age: 22});
      const changeData = () => data.value = "更改的值"

      return {
        counter, doubleCounter, increment, decrement,
        scrollX, scrollY,
        mouseX, mouseY,
        data, changeData
      }


      // return {
      //   ...useCounter()
      // }
    }
  }
</script>

<style scoped>
  .content {
    height: 3000px;
    width: 5000px;
  }
  .scroll {
    position: fixed;
    right: 50px;
    bottom: 30px;
  }
  .mouse {
    position: fixed;
    right: 30px;
    bottom: 80px;
  }
</style>