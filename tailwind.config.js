/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Cabinet Grotesk'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        surface: "var(--color-surface)",
      }
    },
  },
  plugins: [],
}
