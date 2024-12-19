/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      extend: {
        animation: {
          wiggle: "wiggle 0.5s ease-in-out infinite",
        },
        keyframes: {
          wiggle: {
            "0%, 100%": {
              transform: "rotate(-5deg)",
            },
            "50%": {
              transform: "rotate(5deg)",
            },
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
