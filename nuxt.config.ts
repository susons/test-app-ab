import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Flights app",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Flights app" },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Flights app" },
        { property: "og:description", content: "Flights app" },
        {
          property: "og:image",
          content: "http://localhost:3000/image.png",
        },
        { property: "og:url", content: "http://localhost:3000" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Flights app" },
        { name: "twitter:description", content: "Flights app" },
        {
          name: "twitter:image",
          content: "http://localhost:3000/image.png",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
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
  alias: {
    "@assets": join(currentDir, "app/assets"),
    "@atoms": join(currentDir, "app/components/atoms"),
    "@molecules": join(currentDir, "app/components/molecules"),
    "@organisms": join(currentDir, "app/components/organisms"),
    "@pages": join(currentDir, "app/pages"),
    "@definitions": join(currentDir, "app/types"),
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["vue3-toastify/dist/index.css"],
});
