import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/vue/dashboard',
      name: 'dashboard',
      component: () => import('./components/DashboardView.vue'),
    },
    {
      path: '/vue/apps',
      name: 'apps',
      component: () => import('./components/AppsView.vue'),
    },
    {
      path: '/vue/settings',
      name: 'settings',
      component: () => import('./components/SettingsView.vue'),
    },
    {
      path: '/vue/user',
      name: 'user',
      component: () => import('./components/UserView.vue'),
    },
  ],
})

export default router