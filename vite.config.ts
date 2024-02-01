import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      app: path.resolve(__dirname, "./src/app"),
    },
  },
})
