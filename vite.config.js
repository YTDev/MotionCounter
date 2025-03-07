import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.js",

      name: "MotionCounter",

      fileName: (format) => `motioncounter.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          motion: "MotionReact",
        },
      },
    },
  },
});
