<template>
  <div class="app">
    <teleport to="#wyatt">
      <h2>當前計數</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#wyatt">
      <h1>哈哈哈</h1>
    </teleport>
  </div>
</template>

<script>
  import { getCurrentInstance } from 'vue'
  import HelloWorld from './HelloWorld.vue';
  export default {
    components: {
      HelloWorld
    },
    setup() {
      const instance = getCurrentInstance();
      console.log(instance.appContext.config.globalProperties.$name);
      
    }
  }
</script>

<style scoped>

</style>