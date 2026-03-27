import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Post from '../views/Post.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: Post },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
