// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
  ],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/scss/font.scss"],
});
