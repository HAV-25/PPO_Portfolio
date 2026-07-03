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
        cream: "#F5F3EF",
        "cream-card": "#EDEAE3",
        "cream-deep": "#E5E1D8",
        navy: "#24262B",
        "navy-80": "rgba(36,38,43,0.8)",
        "navy-20": "rgba(36,38,43,0.2)",
        primary: "#274690",
        cyan: "#1BAFBF",
        slate: "#68707D",
        "red-wrong": "#D94F4F",
        rule: "#DDD8CE",
        "live-bg": "#E8F5F0",
        "live-dot": "#2D9E6B",
        "inbuild-bg": "#EDEAE3",
        "inbuild-dot": "#8A8577",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["40px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["32px", { lineHeight: "1.2" }],
        "heading-md": ["24px", { lineHeight: "1.3" }],
        "heading-sm": ["18px", { lineHeight: "1.4" }],
        "body-lg": ["20px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.65" }],
        "body-sm": ["15px", { lineHeight: "1.6" }],
        "label-sm": ["13px", { lineHeight: "1.4", letterSpacing: "0.04em" }],
        "label-xs": ["11px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "80px",
        "section-lg": "120px",
      },
      borderWidth: {
        "6": "6px",
      },
      borderRadius: {
        tag: "2px",
        card: "0px",
        btn: "2px",
        badge: "50%",
        cta: "0px",
      },
      transitionDuration: {
        "150": "150ms",
        "200": "200ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
        "fade-in": "fadeIn 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
