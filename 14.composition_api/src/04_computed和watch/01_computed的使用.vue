<template>
  <div>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{fullName}}</h2>
    <button @click="changeName">換名字</button>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'
  export default {
    setup() {
      const firstName = ref("Lazy");
      const lastName = ref('Wyatt');

      //1.用法一: 傳入getter函數
      //computed返回值是一個ref對象
      // const fullName = computed(() => firstName.value + lastName.value)
      
      const fullName = computed({
        get: () => firstName.value + " " + lastName.value,
        set(newValue) {
          const names = newValue.split(" ");
          firstName.value = names[0];
          lastName.value = names[1];
        }
      })

      const changeName = () => {
        fullName.value = "Lazy Wayne"
      }

      return {
        firstName,
        lastName,
        fullName,
        changeName
      }
    }
  }
</script>

<style scoped>

</style>