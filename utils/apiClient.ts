// ~/utils/apiClient.ts
import { getCookie } from '~/utils/cookie';
import { logout } from '@/utils';
import { COOKIE_KEY } from '~/constants/cookie';

export const apiClient = () => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl.base,
    headers: {
      Authorization: `Bearer ${getCookie(COOKIE_KEY.ACCESS_TOKEN)}`,
    },
    onRequest({ request, options }) {
      const token = getCookie(COOKIE_KEY.ACCESS_TOKEN);
      if (token) {
        options.headers = {
          ...options.headers,
        };
      }
    },
    onResponse({ response }) {
      if (response.status === 401) {
        logout();
      }
    },
  });

  return api;
};
