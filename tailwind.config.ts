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
        // Turkmen-inspired color palette matching v1
        turkmen: {
          green: '#005f2f',
          red: '#9d1c1f',
          gold: '#cda349',
        },
        desert: {
          sand: '#f3e9d2',
        },
      },
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
