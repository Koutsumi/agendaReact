/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          100: '#039B6C'
        },
        blue:{
          100: '#093366'
        },
        black:{
          100: '#051933'
        }

      }
    },
  },
  plugins: [],
}