import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        surface: "#0f0f0f",
        elevated: "#161616",
        gold: "#c9aa71",
        red: "#cc2936",
        "primary-text": "#ededed",
        muted: "#666666",
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        atmosphere: "-0.06em",
      },
    },
  },
  plugins: [],
};

export default config;
