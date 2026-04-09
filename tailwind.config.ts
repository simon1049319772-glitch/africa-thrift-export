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
        primary: {
          green: "#0D5C3D",
          gold: "#D4A537",
          rust: "#C65D3B",
        },
        secondary: {
          blue: "#1A365D",
          green: "#48BB78",
          orange: "#ED8936",
        },
        neutral: {
          dark: "#2D3748",
          gray: "#718096",
          light: "#E2E8F0",
          bg: "#F7FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans SC", "sans-serif"],
        display: ["Montserrat", "Noto Sans SC", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
