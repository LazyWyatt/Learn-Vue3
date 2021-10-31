<template>
  <div>
    <h1>Home</h1>
    <h2>{{message}}</h2>
    <h3>{{title}}</h3>
    <!-- <button @click="btnClick"></button> -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    // setup(props, context) {
    setup(props, {attrs, slots, emit}) {
      console.log(props.message)
      console.log(attrs.id, attrs.class)
      console.log(slots);
      console.log(emit)

      return {
        title: "Hello Home",
        counter: 100
      }
    }
  }
</script>

<style scoped>

</style>