import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStringView'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingHtml'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingInput'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingSelect'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
