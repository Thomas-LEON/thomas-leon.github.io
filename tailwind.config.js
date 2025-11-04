/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0F172A",
        ink: "#1E293B",
        mist: "#E2E8F0",
        accent: "#2563EB"
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
