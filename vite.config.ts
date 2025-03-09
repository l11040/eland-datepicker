import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ElandDatePicker",
      formats: ["es", "cjs"], // ES 모듈 + CommonJS 지원
      fileName: (format) => `eland-datepicker.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
