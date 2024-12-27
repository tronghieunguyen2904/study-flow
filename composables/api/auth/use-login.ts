import { useMutation } from "@tanstack/vue-query";
import { routes } from "~/app/routes";
import { apiClient } from "@/utils/apiClient";
import { setCookie } from "~/utils/cookie";
import { useLoadingStore } from "~/stores/loading";
import { useProfileStore } from "~/stores/profile";
import { COOKIE_KEY } from "~/constants/cookie";

const ENDPOINT = '/auth/login';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string;
  refreshToken: string;
}

const loginMutationFn = async (payload: LoginPayload) => {
  const api = apiClient();
  const response = await api<LoginResponse>(`${ENDPOINT}`, {
    method: 'POST',
    body: payload,
  });
  return response;
};

export const useLogin = () => {
  const loading = useLoadingStore();
  const profile = useProfileStore();

  const mutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: loginMutationFn,
    onSuccess: (data: LoginResponse) => {
      const { accessToken, image } = data;
      
      if (accessToken) {
        setCookie(COOKIE_KEY.ACCESS_TOKEN, accessToken);
        profile.setProfile(data);
        window.localStorage.setItem('avatar', image);

        navigateTo(routes.SUBJECT.path);
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      loading.hide();
      if (error?.response.status === 400) {

      }
    },
  });

  return {
    ...mutation,
  };
};
