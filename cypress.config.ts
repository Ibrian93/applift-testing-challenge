import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      baseUrl: 'https://demoqa.com/',
      retries: { runMode: 2, openMode: 2},
  },
});
