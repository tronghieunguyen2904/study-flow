// router.options.js
import type { RouterConfig } from "nuxt/schema";

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'root',
      path: '/',
      children: [
        {
          name: 'home',
          path: '',
          component: () => import('~/pages/index.vue'),
        },
        {
          name: 'login',
          path: 'login',
          component: () => import('@/pages/auth/login.vue'),
        },
        {
          name: 'register',
          path: 'register',
          component: () => import('@/pages/auth/register.vue'),
        },
        {
          name: 'list-subject',
          path: 'subject',
          component: () => import('@/pages/list-subject.vue'),
          meta: {
            layout: 'empty-layout'
          }
        },
      ]
    },
  ], 
}