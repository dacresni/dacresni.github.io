import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'


const router = createRouter({
  history: createWebHistory(),
  routes : [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Nehemiah's Project Dashboard",
      transition: 'fade'
    },
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')

  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About Nehemiah's Awesome Website",
      transition: 'fade'
    },
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/photos',
    name: 'Photography',
    meta: {
      title: "About Nehemiah's Awesome Photography",
      transition: 'fade'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "picts" */ './views/Picts.vue')
  },
  {
    path: '/posts',
    name: 'Blog',
    meta: {
      title: "About Nehemiah's Awesome Blog",
      transition: 'fade'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
  }
] 
})


createApp(App)
.use(router)
.mount('#app')
