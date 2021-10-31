import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置映射關係
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../pages/Home.vue'), //import 是一個Promise函數
    name: 'home',
    meta: {
      name: 'home'
    },
    children: [
      {
        path: '',
        redirect: '/home/message'
      },
      {
        path: 'message',
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue')
  },  
  {
    path: '/user/:username',
    component: () => import('../pages/User.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*', //最後的星*路徑會不會被分成陣列
    component: () => import('../pages/NotFound.vue')
  }
];

// 創建一個路由對象router
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 動態添加路由
const categoryRoute = {
  path: "/category",
  component: () => import('../pages/Category.vue')
}


// 添加第一層路由
router.addRoute(categoryRoute)

// 添加第二層路由
router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue")
})

// 刪除路由
// 方式一、removeRoute
router.removeRoute('moment')
// 方式二、addRoute返回值回調
const removeRoute = router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue")
})
removeRoute()

router.hasRoute() // 檢查路由是否存在
router.getRoutes() // 獲取一個包含所有路由紀錄的陣列

// 導航守衛
router.beforeEach((to, from) => {
  // to: Route對象，即將跳轉到的對象
  // from: 從哪一個路由對象跳轉導航過來的
  /*
    返回值問題:
      1. false 不進行導航
      2. undefined或者不寫返回值: 進行默認導航
      3. 字符串: 路徑, 轉跳到對應的路經中
      4. 對象: router.push(path: "/login", query: ...)
  */
  // if(to.path.indexOf('/home') !== -1) {
  //   return '/login'
  // }
  if(to.path !== '/login') {
    return '/login'
  }
  console.log('進行路由跳轉')
})
export default router;