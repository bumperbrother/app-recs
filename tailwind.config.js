/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colors based on the pyramid graphic
        'toppings': '#F3F27C', // Yellow
        'service-line': '#8CDFD6', // Teal
        'engagement': '#9ED9A0', // Green
        'tax-workflow': '#F5A4D0', // Pink
        'close-automation': '#F5A4D0', // Pink (same as tax-workflow)
        'practice-management': '#E86A50', // Orange/Red
        'tax-preparation': '#4A90E2', // Blue
        'ledger': '#4A90E2', // Blue (same as tax-preparation)
      },
    },
  },
  plugins: [],
}
