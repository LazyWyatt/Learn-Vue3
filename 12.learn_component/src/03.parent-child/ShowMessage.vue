<template>
  <div>
    <h2 :class="$attrs.class">{{title}}</h2>
    <h6 v-bind="$attrs">{{content}}</h6>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    // props: ['title', 'content']
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "123"
      },
      info: {
        type: Object,
        //must function return
        default() {
          return {name: "wyatt"}
        }
      },
      messageInfo: {
        type: String,

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>