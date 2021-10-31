<template>
  <div>
    <p>Home</p>
    <p>{{message}}</p>
    <button @click="emitEvent">發射事件</button>
  </div>
</template>

<script setup>
  import { defineProps, defineEmit } from 'vue';
  const props = defineProps({
    message: {
      type: String,
      default: "哈哈哈"
    }
  })

  const emit = defineEmit(["increment", "decrement"])
  
  const emitEvent = () => {
    emit('increment', '100000')
  }
</script>

<style scoped>

</style>