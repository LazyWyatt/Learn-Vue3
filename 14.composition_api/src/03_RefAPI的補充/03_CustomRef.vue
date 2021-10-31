<template>
  <div>
    <input type="text" v-model="message">
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue';
  import debounceRef from './hook/useDebounce';

  export default {
    setup() {
      const message = debounceRef("hello message")


      return {
        message
      }
    }
  }
</script>

<style scoped>

</style>