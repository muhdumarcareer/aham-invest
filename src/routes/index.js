import { createRouter, createWebHistory } from "vue-router";
import Login from '@/views/login-view.vue'
import Market from '@/views/market-view.vue'
import Product from '@/views/product-view.vue'
import Wallet from '@/views/wallet-view.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Wallet
  },
  {
    path: '/market',
    name: 'market',
    component: Market
  },
  {
    path: '/product/:id',
    name: 'productWithId',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router