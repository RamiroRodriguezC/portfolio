import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // base "/" mantiene standalone en ramirorodcas.vercel.app (/)
  // assetsDir distinto evita colisión con Foki /assets en el host multizone
  base: "/",
  build: {
    assetsDir: "portfolio-assets",
  },
  plugins: [tailwindcss(), react()],
});
