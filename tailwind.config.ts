import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-groween': "#22577A",
        'aquamarine-groween': "#22577A",
        'green-groween': "#57CC99",
        'lemon-groween': "#80ED99",
        'pale-groween': "#C7F9CC",
      }
    },
  },
  plugins: [],
};
export default config;
