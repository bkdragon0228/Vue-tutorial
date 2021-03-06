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
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckBox',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingCheckBox'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingAttribute'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingList'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingClass'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStyle'
      )
  },
  {
    path: '/event/click',
    name: 'ClickEvent',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch: true */ '../views/2_event/ClickEvent'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
