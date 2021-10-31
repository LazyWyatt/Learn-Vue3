<script>
import { ref, h } from 'vue'
import Home from './Home.vue'

export default {
  render() {
    return h(Home, null, {
      default: props => h("span", null, `App傳入Home的內容: ${props.name}`)
    })
  },
}
</script>

<style scoped></style>
