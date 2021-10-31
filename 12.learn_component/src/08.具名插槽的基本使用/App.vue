<template>
  <div>
    <navbar :name="name">
      <template v-slot:left>
        <button>左邊的按鈕</button>
      </template>
      <template v-slot:center>
        <h2>我是標題</h2>
      </template>
      <template v-slot:right>
       <i>右邊的元素</i>
      </template>
      <!-- <template v-slot:wyatt>
       <i>wyatt</i>
      </template> -->
      <template v-slot:[name]>
       <i>wyatt</i>
      </template>
    </navbar>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        name: 'wyatt'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>