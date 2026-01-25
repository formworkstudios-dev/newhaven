// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/seo",
    "nuxt-swiper",
  ],

  routeRules: {
    '/plan-your-visit': { redirect: { to: 'https://app.textinchurch.com/connect-cards/AxP3gJSuf5DT7GiJCkY5', statusCode: 301 } },
  },
});