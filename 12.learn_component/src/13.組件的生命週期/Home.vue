<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '修改前',
      };
    },
    methods: {
      changeMessage() {
        this.message = '修改後';
      },
    },
    beforeCreate() {
      console.log('home before create');
    },
    created() {
      console.log('home created');
    },
    beforeMount() {
      console.log('home beforemount');
    },
    mounted() {
      console.log('home mounted');
    },
    beforeUnmount() {
      console.log('home before unmount');
    },
    unmounted() {
      console.log('home unmounted');
    },
    beforeUpdate() {
      console.log('home before update');
    },
    updated() {
      console.log('home updated');
    },
  };
</script>

<style lang="scss" scoped></style>
