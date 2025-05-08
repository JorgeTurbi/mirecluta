/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'military-navy': 'hsl(210, 64%, 20%)',
        'military-gold': 'hsl(45, 56%, 52%)',
        'military-green': 'hsl(78, 36%, 20%)',
        'military-gray': '#6b7280',
        'gray-200': '#e5e7eb'
      }
    }
  },
  plugins: []
}
