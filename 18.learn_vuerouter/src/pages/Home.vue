<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>Home1</li>
      <li>Home2</li>
      <li>Home3</li>
    </ul>
    <!-- ul>li{Home的內容$}*3 -->
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/product">商品</router-link>
    <router-link to="/home/movement">動態</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>