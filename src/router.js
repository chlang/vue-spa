import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // Remove # from URL
  routes: [
    {path: '/login', component: Login},
    {path: '/', component: Category}
  ]
})

export default router
