import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-main)",
        sidebar: "var(--bg-sidebar)",
        card: "var(--bg-card)",
        soft: "var(--bg-soft)",

        primary: "var(--primary)",
        border: "var(--border)",

        text: "var(--text-main)",
        muted: "var(--text-muted)"
      },

      boxShadow: {
        card: "var(--shadow-card)"
      },

      backgroundImage: {
        tia: "linear-gradient(135deg,#ec4899,#db2777)"
      }
    }
  },
  plugins: []
} satisfies Config;