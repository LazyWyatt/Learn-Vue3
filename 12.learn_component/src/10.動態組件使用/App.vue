<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="btnClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- 
    <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 動態組件 -->
    <!-- is後面可以填通過component函數註冊的組件 -->
    <!-- 組件對象中的components中註冊的組件 -->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="wyatt"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './pages/Home.vue';
  import About from './pages/About.vue';
  import Category from './pages/Category.vue';
  export default {
    data() {
      return {
        tabs: ['home', 'about', 'category'],
        currentTab: 'home',
      };
    },
    components: {
      Home,
      About,
      Category,
    },
    methods: {
      btnClick(item) {
        this.currentTab = item;
      },
      pageClick() {
        console.log('內部發生了點擊');
      },
    },
  };
</script>

<style scoped>
  .active {
    color: red;
  }
</style>
