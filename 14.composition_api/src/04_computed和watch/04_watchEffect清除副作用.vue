<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年紀</button>
  </div>
</template>

<script>
  import { watchEffect, watch, ref } from 'vue'
  export default {
    setup() {
      //watchEffect: 自動收集響應式依賴
      const name = ref("wyatt");
      const age = ref(22);

      
      //默認情況下立即執行一次，自動蒐集依賴
      //這裡有用到name.value
      const stop = watchEffect((onInvalidate) => {

        const timer = setTimeout(() => {
          console.log("網路請求成功")
        },1000)

        // 根據name和age兩個參數進行監聽發送請求
        onInvalidate(() => {
          //在這個函數中清除副作用
          // request.cancel();
          clearTimeout(timer);
          console.log("onInvalidate")
        })
      
        console.log("name:", name.value, "age:", age.value)
      })
      
      const changeName = () => name.value = "wayne";
      const changeAge = () => {
        age.value++
        if (age.value > 25) {
          stop();
        }
      };
    
      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>
