/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Jura': ['Jura', 'system-ui'],
      'Jersey':['Jersey', 'sans-serif'],
      'Poppins':['Poppins','system-ui'],
      'Mono':['Montserrat','system-ui']
    },
    extend: {},
  },
  plugins: [],
}

