export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["vue3-toastify/dist/index.css"],
});
