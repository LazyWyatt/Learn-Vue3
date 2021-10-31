<template>
  <div>
    <template v-if="isShow">
      <home></home>
    </template>
    <button @click="showCpn">切換(卸載組件)</button>
  </div>
</template>

<script>
  import Home from './Home.vue';
  export default {
    data() {
      return {
        isShow: true,
      };
    },
    methods: {
      showCpn() {
        this.isShow = !this.isShow;
      },
    },
    components: {
      Home,
    },
  };
</script>

<style lang="scss" scoped></style>
