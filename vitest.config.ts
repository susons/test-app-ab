import { defineVitestConfig } from "@nuxt/test-utils/config";
import svgLoader from "vite-svg-loader";

export default defineVitestConfig({
  plugins: [
    svgLoader({
      defaultImport: "component",
    }),
  ],
  test: {
    environment: "nuxt",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov", "json-summary", "json"],
      reportsDirectory: "coverage",
    },
  },
});
