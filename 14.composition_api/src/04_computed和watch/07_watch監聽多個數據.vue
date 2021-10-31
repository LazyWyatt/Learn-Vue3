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
      const info = reactive({name: "wyatt", age: 22});
      const name = ref("wayne")


      watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName] ) => {
        console.log("newInfo:", newInfo, "newName:", newName)
        console.log("oldInfo:", oldInfo, "oldName:", oldName)
      })
      
      
      const changeData = () => {
        info.name = 'Wyatt';
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
