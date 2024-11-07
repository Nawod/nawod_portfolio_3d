import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "var(--themeMain)",
        themeLight: "var(--mainLight)",
        themeDark: "var(--mainDark)",
        secondary: "var(--themeSecond)",
        secondaryLight: "var(--secondLight)",
        secondaryDark: "var(--secondDark)",
      },
    },
  },
  plugins: [],
};
export default config;
