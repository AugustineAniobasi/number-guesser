// vitest.config.ts
import { defineConfig, configDefaults } from "vitest/config";


export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "tests-examples/**"],
  },
});
