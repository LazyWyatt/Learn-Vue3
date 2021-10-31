<template>
  <div>
    <input type="text" v-focus>

    <h2>當前計數: {{counter}}</h2>
    <button v-wyatt @click="increment">增加</button>
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
        created() {
          console.log("created");
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
        counter
      }
    }
  }
</script>

<style scoped>

</style>