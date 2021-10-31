
<script>
  import { ref } from "vue";
  import HelloWorld from "./HelloWorld.vue";
  export default {
    setup() {
      const counter = ref(0)
      const increment = () => counter.value++;
      const decrement = () => counter.value--;
      return {
        counter,
        increment,
        decrement
      }
    },
    render() {
      return (
        <div>
          <h2>當前計數: {this.counter}</h2>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>
          <HelloWorld>
            {{default: props => <button>我是按鈕</button>}}
          </HelloWorld>
        </div>
      )
    }
  }
</script>

<style scoped>

</style>