/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sneak-bg': '#E8F3DB',
        'olive': {
          600: '#556B2F',
        },
      },
      boxShadow: {
        'phone': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
