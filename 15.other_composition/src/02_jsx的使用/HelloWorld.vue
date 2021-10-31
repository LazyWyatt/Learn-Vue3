
<script>
  export default {

    render() {
      return(
        <div>
          <div>HelloWorld</div>
          {this.$slots.default ? this.$slots.default() : <span>哈哈哈</span>}
        </div>
      )
    }
  }
</script>

<style scoped>

</style>