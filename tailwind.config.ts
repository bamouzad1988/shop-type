import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        8: "0.11",
        100: "1",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      custom: {
        main: "var(--color-main) ",
        text: "var(--color-text) ",
        border: "var(--color-border) ",
        textSecondary: "var(--color-text-secondary) ",
        sectionTitle: "var(--color-section-title) ",
        productText: "var(--color-product-text) ",
        pageBack: "var(--color-page-back) ",
        white: "var(--color-white) ",
      },
    },
    fontFamily: {
      "iransans-thin": ["iransansx-num-thin"],
      "iransans-light": ["iransansx-num-light"],
      "iransans-medium": ["iransansx-num-medium"],
      "iransans-regular": ["iransansx-num-regular"],
      "iransans-demibold": ["iransansx-num-demibold"],
      "iransans-bold": ["iransansx-num-bold"],
    },
    screens: {
      xxs: "320px",
      xs: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
  },
  plugins: [],
};
export default config;
