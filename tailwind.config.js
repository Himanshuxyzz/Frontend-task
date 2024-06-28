/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular"],
        medium: ["Medium"],
        semibold: ["Semibold"],
        bold: ["Bold"],
      },
      colors: {
        accent: "rgb(var(--accent-foreground))",
        foreground_text_1: "rgb(var(--text-foreground-1))",
        foreground_text_2: "rgb(var(--text-foreground-2))",
        foreground_text_3: "rgb(var(--text-foreground-3))",
        foreground_text_4: "rgb(var(--text-foreground-4))",
        accent_border_stroke: "rgb(var(--border-stroke-accent))",
      },
      spacing: {
        content: "calc(var(--width)*0.84)",
      },
    },
  },
  plugins: [],
};
