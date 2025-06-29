import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      background: 'var(--color-background)',
      foreground: 'var(--color-foreground)',
    },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

export default config;
