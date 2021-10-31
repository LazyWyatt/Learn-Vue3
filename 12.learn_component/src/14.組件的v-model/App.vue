<template>
  <div>
    <!-- <input v-model="message" />
    <input
      type="text"
      :value="message"
      @input="message = $event.target.value"
    /> -->
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>

    <!-- 組件上綁定v-model -->
    <!-- <my-input v-model="message"></my-input> -->
    <!-- <my-input
      :modelValue="message"
      @update:model-value="message = $event"
    ></my-input> -->

    <!-- 組件上綁定兩個v-model -->
    <my-input v-model="message" v-model:title="title"></my-input>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
export default {
  components: {
    MyInput,
  },
  data() {
    return {
      message: 'Hello world!',
      title: 'title',
    }
  },
}
</script>

<style lang="scss" scoped></style>
