import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        title: ["var(--font-ubuntu)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
