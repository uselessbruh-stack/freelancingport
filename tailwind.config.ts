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
        bg: {
          primary: "#0D0D0D",
          secondary: "#121212",
          tertiary: "#181818",
        },
        surface: {
          DEFAULT: "#1F1F1F",
          light: "#242424",
          lighter: "#2A2A2A",
        },
        text: {
          primary: "#F6F6F6",
          secondary: "#D0D0D0",
          muted: "#8A8A8A",
        },
        accent: {
          gold: "#C9A96E",
          "gold-light": "#D4B87A",
          bronze: "#B08D57",
          copper: "#B87333",
          amber: "#D4A574",
          olive: "#3D3D2B",
          stone: "#8C8C7A",
          warm: "#F5F0E8",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
          light: "rgba(255, 255, 255, 0.1)",
          accent: "rgba(201, 169, 110, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
        heading: [
          "var(--font-space-grotesk)",
          "var(--font-geist)",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-lg": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        "heading-md": [
          "clamp(1.25rem, 2vw, 1.75rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.7", letterSpacing: "0", fontWeight: "400" },
        ],
        "body-md": [
          "1rem",
          { lineHeight: "1.7", letterSpacing: "0", fontWeight: "400" },
        ],
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" },
        ],
        caption: [
          "0.75rem",
          { lineHeight: "1.5", letterSpacing: "0.04em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        section: "clamp(5rem, 10vh, 8rem)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "grain": "grain 8s steps(10) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" },
          to: { boxShadow: "0 0 40px rgba(201, 169, 110, 0.2)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      boxShadow: {
        glow: "0 0 30px rgba(201, 169, 110, 0.15)",
        "glow-sm": "0 0 15px rgba(201, 169, 110, 0.1)",
        "glow-lg": "0 0 60px rgba(201, 169, 110, 0.2)",
        card: "0 4px 30px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 50px rgba(0, 0, 0, 0.5)",
        elevation:
          "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
