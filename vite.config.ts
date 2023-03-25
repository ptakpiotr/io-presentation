import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  logLevel: "warn",
  envPrefix: "REACT_APP",
  server: {
    port: 3000,
    open: true,
  },
  json: {
    namedExports: true,
  },
});
