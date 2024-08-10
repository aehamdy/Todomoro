/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warning-color': '#e20807',
        'app-bg' : 'rgb(245, 236, 227)'
      },
      padding: {

      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      transitionDuration: {
        'short': '150ms',
        'medium': '300ms',
        'long': '500ms',
        'extra-long': '750ms',
      }
    },
  },
  plugins: [],
}

