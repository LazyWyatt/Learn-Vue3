<template>
  <div id="app">
    <!-- props: href -->
    <!-- props: route 對象 -->
    <!-- props: navigate 導航函數 -->
    <!-- props: isActive 是否屬於啟動狀態 -->
    <!-- props: isExactActive 是否屬於精確匹配啟動狀態 -->
    <router-link to="/home" v-slot="props" custom>
      <!-- <nav-bar></nav-bar> -->
      <!-- <strong>首頁</strong> -->
      <!-- <button>{{props.route}}</button> -->
      <!-- <button>{{props.navigate}}</button> -->
      <button @click="props.navigate">{{props.href}}</button>
    </router-link>
    <button @click="jumpToAbout">關於</button>
    <router-link to="/about">關於</router-link>
    <router-link :to="'/user/' + name">用戶</router-link>
    <router-link to="/category">分類</router-link>


    <transition>
      <component :is="組件"></component>
    </transition>

    <router-view v-slot="props">
      <transition name="wyatt">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      name: 'wyatt'
    }
  },
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about")
    // }
  },
  setup() {
    const router = useRouter();
    const jumpToAbout = () => {
      router.push('/about')
      router.push({
        path: '/about',
        query: {
          name: 'wyatt',
          age: 22
        }
      })
      router.replace('/about')
      router.go() //前進一步
      router.go(-1) //後退一步
      router.forward() //前進一步
      router.back() //後退一步
    }

    return {
      jumpToAbout
    }
  }
}
</script>

<style lang="scss">
  .wyatt-enter-from,
  .wyatt-leave-to {
    opacity: 0;
  }

  .wyatt-enter-to,
  .wyatt-leave-from {
    opacity: 1;
  }

  .wyatt-enter-active,
  .wyatt-leave-active {
    transition: opacity 1s ease;
  }
</style>
