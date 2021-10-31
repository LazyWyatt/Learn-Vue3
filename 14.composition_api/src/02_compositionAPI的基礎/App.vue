<template>
  <div>
    <Home message="訊息" id="bbb" class="aaa">
      <template #default>
      <h2>哈哈哈</h2>
      </template>
    </Home>
  </div>
</template>

<script>
  import Home from './Home.vue';
  export default {
    // setup函數那些參數? 
    /* 
      參數一: props，父組件傳過來的屬性
      參數二: context，包含三個屬性
        * attrs: 所有非prop的attribute
        * slots: 父組件傳過來的插槽
        * emit: 當組件內部發出事件會用到emit(因為不能訪問this，所以不可以透過this.$emit)
        
    */

    // setup函數有哪些返回值
    components : {
        Home
    },
  }
</script>

<style scoped>

</style>