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
        cream: "#FBFAF7",
        "cream-card": "#F2EFE9",
        "cream-deep": "#E8E4DC",
        navy: "#24356e",
        "navy-80": "rgba(36,53,110,0.8)",
        "navy-20": "rgba(36,53,110,0.2)",
        cyan: "#4F7C72",
        "cyan-light": "rgba(79,124,114,0.12)",
        slate: "#6B7280",
        "red-wrong": "#D94F4F",
        rule: "rgba(227,222,214,0.9)",
        "rule-strong": "rgba(36,53,110,0.15)",
        "live-bg": "#E8F5F0",
        "live-dot": "#2D9E6B",
        "inbuild-bg": "#F0F0EE",
        "inbuild-dot": "#9B9B9B",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
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
        tag: "8px",
        card: "16px",
        btn: "12px",
        badge: "50%",
        cta: "20px",
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
