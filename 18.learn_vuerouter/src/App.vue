<template>
  <div id="app">
    <h2>App</h2>
    <p>App content</p>
    <!-- 內置組件router-link -->
    <!-- props: href跳轉的鏈接 -->
    <!-- props: route對象 -->
    <!-- props: navigate -->
    <!-- props: isActive -->
    <!-- props: isExactActive -->
    <!-- <router-link to="/home" active-class="wyatt-active" v-slot="props">
      <Navbar title="首頁"></Navbar>
    </router-link> -->
    <router-link to="/home" active-class="wyatt-active" v-slot="props">
      <button>{{props.href}}</button>
      <!-- <p>{{props.route}}</p> -->
      <!-- <p>{{props.navigate}}</p> -->
      <span :class="{'active': props.isActive}"></span>
    </router-link>
    <router-link to="/home"  v-slot="props" custom>
      <button @click="props.navigate">自定義跳轉</button>
    </router-link>
    <router-link to="/about">關於</router-link>
    <router-link :to="'/user/' + name + '/id/1'" >用戶</router-link>
    <router-link to="/category" >分類</router-link>
    <button @click="jumpToHome">首頁</button>
    <button @click="jumpToAbout">關於</button>
    <!-- 內置組件router-view -->
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
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  setup() {
    const router = useRouter();
    const name = ref('wyatt');
    const jumpToHome = () => {
      router.push('/home')
    }
    const jumpToAbout = () => {
      // router.push('/about');
      router.push({
        path: '/about',
        query: {
          name: "wyatt",
          age: 23,
        }
      })
    }
    return {
      name,
      jumpToHome,
      jumpToAbout
    }
  }
}
</script>

<style>

.router-link-active {
  color: red;
}

.wyatt-active {
  color: green;
}

.wyatt-enter-from,
.wyatt-leave-to {
  opacity: 0;
}

.wyatt-enter-active,
.wyatt-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
