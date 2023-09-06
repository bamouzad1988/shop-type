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
        gray: "var(--color-gray) ",
        lightGray: "var(--color-lightGray) ",
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
      sm: "690px",
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
    fontSize: {
      xxs: "0.5rem",
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
export default config;
