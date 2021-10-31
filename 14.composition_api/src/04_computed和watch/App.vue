<template>
  <div>
    <p>{{info.name}}</p>
    <button @click="changeData">更換數據</button>
  </div>
</template>

<script>
  import { watchEffect, watch, ref, reactive } from 'vue'
  export default {
    setup() {
      const info = reactive({
        name: "wyatt", 
        age: 22,
        friend: {
          name: "Nai"
        }
      });


      watch(() => ({...info}), (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }, {
        deep: true,
        immediate: true
      })
      
      const changeData = () => {
        info.friend.name = 'Wyatt';
      }

      return {
        changeData,
        info,
        name
      }
    }
  }
</script>

<style scoped>

</style>
