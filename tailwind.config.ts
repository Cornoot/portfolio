import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const colors = {
  transparent: "transparent",
  current: "currentcolor",
  inherit: "inherit",
  black: "#000000",
  white: "#FFFFFF",
  gray: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
  },
  blue: {
    50: "#EAF6FF",
    100: "#BDE2FF",
    200: "#62B9FF",
    300: "#62B9FF",
    400: "#279FFF",
    500: "#008DFF",
    600: "#007ADC",
    700: "#0069BD",
    800: "#00579D",
    900: "#002C50",
  },
  purple: {
    50: "#F6F5FF",
    100: "#EDEBFE",
    200: "#DCD7FE",
    300: "#CABFFD",
    400: "#AC94FA",
    500: "#9061F9",
    600: "#7E3AF2",
    700: "#6C2BD9",
    800: "#5521B5",
    900: "#362F78",
  },
};

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors,
    fontFamily: {
      inter: ["var(--inter)", ...fontFamily.sans],
      serif: fontFamily.serif,
      monument: ["var(--monument)", ...fontFamily.sans],
    },
    fontSize: {
      quote: ["40px", "60px"],
      "5xl": ["56px", "72px"],
      "4xl": ["48px", "56px"],
      "3xl": ["32px", "44px"],
      "2xl": ["24px", "36px"],
      xl: ["22px", "34px"],
      lg: ["20px", "32px"],
      base: ["16px", "24px"],
    },
    lineHeight: undefined,
    screens: {
      mobile: "375px",
      "tablet-sm": "744px",
      tablet: "1280px",
      desktop: "1440px",
    },
    extend: {
      padding: {
        18: "4.5rem",
      },
    },
  },
};

export default config;
