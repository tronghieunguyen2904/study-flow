// plugins/router.ts
import { defineNuxtPlugin } from '#app';
import { useLoadingStore } from '~/stores/loading';
import { useRouter } from '#imports';

export default defineNuxtPlugin(() => {
  const loadingStore = useLoadingStore();
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    loadingStore.show(); 

    setTimeout(() => {
      next();
    }, 200);
  });

  router.afterEach(() => {
    setTimeout(() => {
      loadingStore.hide();
    }, 500);
  });
});
