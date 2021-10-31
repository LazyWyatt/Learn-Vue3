<template>
  <div>
    <input type="text" v-focus>

    <h2 v-if="counter < 2">當前計數: {{counter}}</h2>
    <button v-wyatt.aaa.bbb="'param'" @click="increment">增加</button>
  </div>
</template>

<script>
  import { ref } from "vue";
  export default {
    directives: {
      focus: {
        mounted(el, bindings, vnode, preVnode) {
          console.log("focuse-mounted")
          el.focus();
        }
      },
      wyatt: {
        created(el, bindings, vnode, preVnode) {
          console.log("created");
          console.log(el);
          console.log(bindings)
          console.log(bindings.value)
          console.log(bindings.modifiers)
          console.log(vnode)
          console.log(preVnode)
        },
        beforeMount() {
          console.log("wyatt beforeMount")
        },
        mounted() {
          console.log("wyatt mounted")
        },
        beforeUpdate() {
          console.log("wyatt beforeUpdate")
        },
        updated() {
          console.log("wyatt updated")
        },
        beforeMount() {
          console.log("wyatt beforeMount")
        },
        unmounted() {
          console.log("wyatt unmounted")
        }
      }
    },
    setup() {
      const counter = ref(0)
      const increment = () => {
        counter.value++
      }
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>