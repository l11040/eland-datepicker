import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      entry: "src/index.ts", // 엔트리 파일 지정
      name: "ElandDatePicker",
      fileName: (format: any) => `eland-datepicker.${format}.js`,
    },
    rollupOptions: {
      // react, tailwindcss 같은 라이브러리는 번들에 포함하지 않음
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
