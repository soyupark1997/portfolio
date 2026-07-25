import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#111827",
        brblue: "#2563EB",
        brviolet: "#7C3AED",
        brteal: "#0F766E",
        bramber: "#D97706",
        brpink: "#DB2777",
      },
    },
  },
  plugins: [],
};
export default config;
