<template>
  <div>
    <!-- 1.默認綁定和事件處理 -->
    <!-- <button @click="btnClick">input按鈕</button>
    <h2>{{ modelValue }}</h2> -->

    <!-- 2.通過input -->
    <!-- <input type="text" :value="modelValue" @input="btnClick" /> -->

    <!-- 綁定到props中是不對的 -->
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },
  },
  methods: {
    btnClick(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
