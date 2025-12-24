/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // strong blue
        },
        secondary: {
          DEFAULT: "#374151", // neutral gray
        },
        accent: {
          DEFAULT: "#4f46e5", // lighter blue for buttons/hover
        },
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
