<template>
  <div>
    <h1>
      {{ message }}
    </h1>
    <button @click="getParentAndRoot">獲得父組件或根組件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '我是navbar組件',
      };
    },
    methods: {
      sayHello() {
        console.log('hello');
      },
      getParentAndRoot() {
        console.log(this.$parent);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
