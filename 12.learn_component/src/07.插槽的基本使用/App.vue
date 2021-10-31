<template>
  <div>
    <my-slot-cpn>
      <button>按鈕</button>
    </my-slot-cpn>
     <my-slot-cpn>
      文字文字
    </my-slot-cpn>
    <my-slot-cpn>
      <my-button></my-button>
    </my-slot-cpn>
    <my-slot-cpn></my-slot-cpn>
    <my-slot-cpn>
      <h2>哈哈哈</h2>
      <button>我是strong</button>
    </my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue';
  import MyButton from './MyButton.vue';
  export default {
    components: {
      MySlotCpn,
      MyButton
    }
  }
</script>

<style lang="scss" scoped>

</style>