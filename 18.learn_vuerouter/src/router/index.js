import { createRouter, createWebHistory, createWebHashHistory }  from 'vue-router';

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';

// 配置映射關係
const routes = [
  { 
    path: '/', 
    redirect: "home"
  },
  {   
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-chunk" */'../pages/Home.vue'),
    meta: {
      name: "home",
      description: "home description"
    },
    children: [
      {
        path: "",
        redirect: "/home/message"
      },
      {
        path: 'message',
        component: () => import("../pages/HomeMessage.vue")
      }, 
      {
        path: 'product',
        component: () => import("../pages/HomeProduct.vue")
      }
    ]
  },
  { path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about-chunk" */'../pages/About.vue')
  },
  {
    path: '/user/:username/id/:id',
    component: () => import('../pages/User.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue')
  }
]

const categoryRoute = {
  path: "/category",
  component: () => import("../pages/Category.vue")
}


// 創建一個路由對象router
const router = createRouter({
  // routes: routes
  routes,
  history: createWebHistory()
})

router.addRoute(categoryRoute);
router.addRoute("home", {
  path: "movement",
  component: () => import("../pages/HomeMoment.vue")
})

// const removeRoute = router.addRoute(categoryRoute);
// removeRoute();
// router.hasRoute()
// router.getRoutes()


//to: route物件，即將跳轉的Route對象
//from: route物件，從哪一個路由對象跳轉過來的

let counter = 0;
router.beforeEach((to, from) => {
  counter++
  console.log(`進行第${counter}次跳轉`)

  // if(to.path.indexOf('/home') !== -1) {
  //   return "/login"
  // } 

  if(to.path !== "/login") {

    const token = window.localStorage.getItem("token");
    if(!token) {
      return "/login"
    }
  }
})
/*
  返回值問題:
   1.false: 不進行導航
   2.undefined或者不寫返回值: 進行默認導航。
   3.字串: 路徑，跳轉到對應的路徑。
   4.物件: 類似router.push({path: '/login', query: {...}})
*/


export default router 