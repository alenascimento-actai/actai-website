import type { Config } from "tailwindcss";
import animated from "tailwindcss-animated";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        title: ["var(--font-ubuntu)", "sans-serif"],
      },
    },
  },
  plugins: [animated],
} satisfies Config;
