<template>
  <div>
    <h1>Home</h1>
    <h2>{{message}}</h2>
    <h3>{{title}}</h3>
    <!-- <button @click="btnClick"></button> -->
    <p>{{counter}}</p>
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
    setup(props, context) {
      let counter = 100;

      const increment = () => {
        console.log("increment")
      }

      return {
        title: "Hello Home",
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>