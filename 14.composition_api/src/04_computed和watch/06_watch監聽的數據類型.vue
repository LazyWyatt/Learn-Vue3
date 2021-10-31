<template>
  <div>
    <p>{{info.name}}</p>
    <p>{{age}}</p>
    <button @click="changeData">更換數據</button>
  </div>
</template>

<script>
  import { watchEffect, watch, ref, reactive } from 'vue'
  export default {
    setup() {
      const info = reactive({name: "wyatt", age: 22});
      const age = ref(22);
      //01.偵聽watch時，第一個參數getter函數
      // watch(() => info.name , (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue)
      // })
      
      //02.傳入一個可響應式對象: ractive/ref對象
      //reactive對象獲取到的newvalue和oldValue都是reactive對象
      //ref對象獲取到的newValue和oldValue都是value本身的值
      watch(info , (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue)
      })
      
      watch(age , (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue)
      })

      //普通對象
      watch(() => {
        return {...info}
      }, (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue)
      })
      
      
      const changeData = () => {
        info.name = 'Wyatt';
        age.value++
      }

      return {
        changeData,
        age,
        info
      }
    }
  }
</script>

<style scoped>

</style>
