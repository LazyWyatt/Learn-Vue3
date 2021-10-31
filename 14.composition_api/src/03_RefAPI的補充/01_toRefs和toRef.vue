<template>
  <div>
    <p>
      {{name}} - {{age}}
    </p>
    <button @click="changeAge">更改年紀</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue';
  export default {
    setup() {
      const info = reactive({name: "wyatt", age: 18});
      
      // let {name, age} = info;
      // let name = "wyatt"
      // let age = 18

      //1.toRefs: 將reactive物件中所有的屬性轉成ref,建立鍵接
      // let {name, age} = toRefs(info);
      const changeAge = () => {
        age.value++;
        console.log(age);
      }

      //2.toRef: 將其中一個屬性轉成ref,建立連接
      let { name } = info;
      let age = toRef(info, "age");

      return {
        name,
        age,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>