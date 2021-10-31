<template>
  <div>
    <input v-model="value" />
    <input v-model="titleInput" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ['update:modelValue', 'update:title'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },
    titleInput: {
      set(titleInput) {
        this.$emit('update:title', titleInput)
      },
      get() {
        return this.title
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
