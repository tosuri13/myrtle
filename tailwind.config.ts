import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [tailwindcssAnimate],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#03506F",
          "primary-hovered": "#013C54",
          secondary: "#C5A377",
          "secondary-hovered": "#A9804B",
        },
        background: {
          primary: "#F8FAFC",
          secondary: "#FFFFFF",
        },
        text: {
          light: "#FFFFFF",
          dark: "#0F172A",
          caption: "#6B7280",
        },
        icon: {
          primary: "#6B7280",
        },
        accent: {
          success: "#80D05A",
          destructive: "#EF4444",
          "destructive-hovered": "#DC2626",
        },
      },
    },
  },
};
export default config;
