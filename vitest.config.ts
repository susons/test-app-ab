import { defineVitestConfig } from "@nuxt/test-utils/config";
import svgLoader from "vite-svg-loader";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
  vite: {
    plugins: [
      svgLoader({
        svgrOptions: { exportType: "default" },
      }),
    ],
  },
});
