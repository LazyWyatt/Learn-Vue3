<template>
  <div>
    <template v-for="(item, index) in hobbies" :key="item">
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      hobbies: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss" scoped></style>
