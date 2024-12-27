import { routes } from "~/app/routes";
import { removeCookie } from "./cookie";
import { COOKIE_KEY } from "~/constants/cookie";

// export const createRoute = (
//     name: string, 
//     path: string, 
//     componentPath: string, 
//     layout = 'default'
//   ) => ({
//     name,
//     path,
//     component: () => import(`/pages/${componentPath}`).then(r => r.default || r),
//     meta: { layout }
//   });

export const logout = () => {
    removeCookie(COOKIE_KEY.ACCESS_TOKEN);
    window.location.href = routes.ROOT.path;
}

export const formatRevenue = (
    revenue: number,
    locale: string = 'en-US',
    currency: string = 'USD'
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(revenue);
  };

export const formatNumber = (
    number: number,
    locale: string = 'en-US',
    options: Intl.NumberFormatOptions = {},
    decimalPlaces: number = 1
  ): string => {
    const factor = Math.pow(10, decimalPlaces);
    const roundedNumber = Math.round(number * factor) / factor;

    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
        ...options,
    }).format(roundedNumber);
};

  