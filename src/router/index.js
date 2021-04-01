import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Users from '../views/Users.vue'
import TableClone from '../views/Table.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/movies', name: 'Movies', component: Movies },
  { path: '/users', name: 'Users', component: Users },
  { path: '/table-clone', name: 'Table Clone', component: TableClone },
  { path: '*', name: 'Page Not Found', component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
