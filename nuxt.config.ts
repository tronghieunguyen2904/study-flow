// https://nuxt.com/docs/api/configuration/nuxt-config
import { Theme } from './assets/css/theme';
import routerConfigs from "./app/router.options"

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxt/icon', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt',],
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
          preset: Theme,
          options: {
              prefix: 'p',
              darkModeSelector: 'system',
              cssLayer: false
          }
      }
    }
  },
  css: [
    '~/assets/css/main.scss',
  ],
  router: {
    // @ts-ignore
    extendRoutes(routes, resolve) {
      const addRoutes = async () => {
        if (routerConfigs && routerConfigs.routes) {
          const additionalRoutes = await routerConfigs.routes([]);
          additionalRoutes.forEach(route => {
            routes.push({
              ...route,
              component: resolve(__dirname, route.component),
              meta: route.meta,
            });
          });
        }
      };
      
      addRoutes();
    },
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: {
        base: process.env.API_BASE_URL || 'https://dummyjson.com',
      },
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})