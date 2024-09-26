import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: () => import('@/views/HomeView.vue')},
  { name: 'not-found', path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue')},
    // meta:{
    // enterClass: 'animate__animated animate__fadeInLeft',
    // leaveClass: 'animate__animated animate__fadeOutRight',
    // }},
  { name: 'register', path: '/register', component: () => import('@/views/RegisterView.vue')},
    // meta:{
    //   enterClass: 'animate__animated animate__fadeInRight',
    //   leaveClass: 'animate__animated animate__fadeOutLeft',
    // }},
  { name: 'basket', path: '/basket', component: () => import('@/views/BasketView.vue')},
  { name: 'order', path: '/order', component: () => import('@/views/OrderView.vue')},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router