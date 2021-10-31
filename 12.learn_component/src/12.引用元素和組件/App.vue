<template>
  <div>
    <!-- 綁定元素 -->
    <h2 ref="title" id="title">哈哈哈</h2>
    <button @click="btnClick">
      獲得元素
    </button>

    <!-- 綁定到組件實例 -->
    <navbar ref="navbar"></navbar>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  export default {
    components: {
      Navbar,
    },
    methods: {
      btnClick() {
        console.log(this.$refs.title);
        console.log(this.$refs.navbar);
        console.log(this.$refs.navbar.message);
        console.log(this.$refs.navbar.sayHello());

        //$el
        console.log(this.$refs.navbar.$el);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
