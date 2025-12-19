import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to: https://rifqi22.github.io/rifqi-portofolio.github.io/
export default defineConfig({
  plugins: [react()],
  base: "/rifqi-portofolio.github.io/",
});
