/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#3B82F6",           // Azul claro
          "primary-focus": "#2563EB",     // Azul claro mais escuro
          "base-100": "#FFFFFF",          // Branco
          "base-200": "#F3F4F6",          // Cinza muito claro
          "base-300": "#E5E7EB",          // Cinza claro
          "base-content": "#1F2937",      // Texto escuro
        },
      },
    ],
  },
}
