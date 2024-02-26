import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/home-view.vue'
import About from '@/views/about-view.vue'
import Login from '@/views/login-view.vue'
import Market from '@/views/market-view.vue'
import Product from '@/views/product-view.vue'
import Profile from '@/views/profile-view.vue'
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
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/market',
    name: 'market',
    component: Market
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
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