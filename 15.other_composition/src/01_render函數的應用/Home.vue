
<script>
  import { h } from 'vue';
  export default {
    render() {
      return h("div", null, [
        h("h2", null, "Home"),
        this.$slots.default ? this.$slots.default({name: "Wyatt"}) : h("span", null, "我是Home插槽的預設值")
      ])
    }
  }
</script>

<style scoped>

</style>