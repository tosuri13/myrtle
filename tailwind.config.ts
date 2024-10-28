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
        },
        background: {
          primary: "#F8FAFC",
          secondary: "#EFF0F0",
        },
        border: "#F8FAFC",
        text: {
          light: "#FFFFFF",
          dark: "#1E293B",
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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
};
export default config;
