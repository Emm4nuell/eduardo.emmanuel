import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // css: {
  //   postcss: "./postcss.config.js", // Certifique-se de que está apontando para o arquivo correto
  // },
});
