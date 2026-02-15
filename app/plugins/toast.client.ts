import { defineNuxtPlugin } from "#app";
import Vue3Toastify, { toast } from "vue3-toastify";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 4000,
    position: "top-right",
    transition: "bounce",
  });

  nuxtApp.provide("toast", toast);
});
