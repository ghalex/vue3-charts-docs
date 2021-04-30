import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import { Home, Docs, GettingStarted, Types, Charts, LineChart, BarChart, AreaChart, CustomLayer } from '@/pages'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
    children: [
      {
        path: 'getting-started',
        name: 'getting-started',
        component: GettingStarted
      },
      {
        path: 'custom-layer',
        name: 'custom-layer',
        component: CustomLayer
      },
      {
        path: 'charts',
        name: 'charts',
        component: Charts,
        redirect: '/docs/charts/line',
        children: [
          {
            path: 'line',
            name: 'line',
            component: LineChart
          },
          {
            path: 'bar',
            name: 'bar',
            component: BarChart
          },
          {
            path: 'area',
            name: 'area',
            component: AreaChart
          }
        ]
      },
      {
        path: 'types',
        name: 'types',
        component: Types
      }
    ]
  }
]

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition): any => {
  if (to.hash) {
    return { selector: to.hash }
  } else if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
