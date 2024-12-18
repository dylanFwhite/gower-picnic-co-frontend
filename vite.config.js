import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// TODO: UPDATE ONCE DEPLOYED
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
