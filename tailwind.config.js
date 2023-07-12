/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28E98C',
        secondary: '#999999',
      },
      fontFamily: {
        primary: ['Inter-Regular', 'sans-serif'],
        subtitle: ['Inter-SemiBold', 'sans-serif'],
        logo: ['Inter-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
