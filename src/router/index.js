import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Article from '../views/Article.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listing',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/restaurants/:id',
    name: 'Restaurants',
    component: Restaurants
  }
]

const router = new VueRouter({
  routes
})

export default router
