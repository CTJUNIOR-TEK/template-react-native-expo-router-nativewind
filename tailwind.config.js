import { red } from 'react-native-reanimated/lib/typescript/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#FF0000',
          400: '#FF4D4D',
          300: '#FF9999',
        },
        'sodras': "#00ffaa"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
      }
    },
  },
  plugins: [],
}
