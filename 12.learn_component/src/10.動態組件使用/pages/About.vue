<template>
  <div>
    About
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        counter: 0,
      };
    },
    created() {
      console.log('about created');
    },
    unmounted() {
      console.log('about unmounted');
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    },
  };
</script>

<style lang="scss" scoped></style>
