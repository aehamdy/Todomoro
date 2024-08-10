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
        'app-bg' : 'rgb(245, 236, 227)',
        'tabs-text': 'rgb(208, 204, 192)',
        // 'tabs-text': 'rgb(209, 202, 184)',
        'tabs-bg': 'rgb(255, 255 ,255, .8)',
        // 'tabs-bg': 'rgb(220, 220, 220)',
        // 'all-color': 'rgb(123, 162, 205)',
        // 'all-color': 'rgb(190, 208, 210)',
        'all-color': 'rgb(190, 209, 226)',
        // 'all-color': 'rgb(96, 120, 120)',
        // 'personal-color': 'rgb(118, 67, 76)',
        // 'personal-color': 'rgb(225, 179, 127)',
        'personal-color': 'rgb(203, 161, 201)',
        // 'work-color': 'rgb(244, 173, 167)',
        // 'work-color': 'rgb(210, 134, 134)',
        'work-color': 'rgb(242, 160, 172)',
        'study-color': 'rgb(0, 174, 161)',
        // 'other-color': 'rgb(180, 222, 198)',
        // 'other-color': 'rgb(146, 160, 195)',
        // 'other-color': 'rgb(254, 211, 221)',
        'other-color': 'rgb(227, 126, 98)',
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

