import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
  },
  resolve: {
    alias: [
      { find: "@view", replacement: path.resolve(__dirname, "src/page/screen") }
  ],
  },
});
