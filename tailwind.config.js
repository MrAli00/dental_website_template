/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          teal: '#0A7E8C',
          amber: '#F59E0B',
          dark: '#1E293B',
          light: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
};