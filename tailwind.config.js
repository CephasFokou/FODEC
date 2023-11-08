/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#7A817A',
        'green-main':'#5DB075',
        'dark-main':'#161E15',
        'gray-ligth':'#F5F5F566',
        'gray-true-500':'#737373',
        'gray-true-800':'#292929',
        'gray-true-600':'#525252',
        'secondary-main':'#6C3AFA'
      },
    },
  },
  plugins: [],
}

