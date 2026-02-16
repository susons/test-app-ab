import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

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
