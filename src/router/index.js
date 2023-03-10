import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView'
import CartView from '../views/CartView'

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
