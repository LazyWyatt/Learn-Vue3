<template>
  <div>
    <h1>Home: {{$store.state.counter}}</h1>
    <hr>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ height }}</p>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex';
  import { computed } from 'vue';
  export default {
    // computed: {
    //   fullName: function() {
    //     return "某些值"
    //   },
    // this.$store.state.name
    //   ...mapState(["counter", "name", "age", "height"])
    //   //映射vuex的key，返回的對象如下
    //   // {
    //   //   counter: function() {},
    //   //   name: function() {}
    //   // }
    // },
    setup() {
      const store = useStore();

      const sCounter = computed(() => store.state.counter);

      const storeStateFns = mapState(["counter", "name", "age", "height"])
      
      // {name: function, age: function, height: function}
      // {name: ref, age: ref, height: ref}
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store});
        storeState[fnKey] = computed(fn)
      })

      return {
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>