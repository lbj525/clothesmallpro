import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    // redirect: '/home',
    component: () => import("views/home/Home.vue")
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import("views/sorts/Sort.vue")
  },
  {
    path: '/car',
    component: () => import("views/shoppingCar/Car.vue")
  },
  {
    path: '/profile',
    component: () => import("views/profiles/Profile.vue")
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router