<template>
  <div>
    <p>
      {{info}}
    </p>
    <button @click="changeInfo">更改年紀</button>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue';
  export default {
    setup() {
      const info = shallowRef({name:"wyatt"});
      
      
      const changeInfo = () => {
        info.value.name = "Wayne"
        triggerRef(info);
      }


      return {
        info,
        changeInfo
      }
    }
  }
</script>

<style scoped>

</style>