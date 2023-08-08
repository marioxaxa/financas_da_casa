/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors:{
        'text': '#f5f5f5',
        'background': '#2a2b38',
        'primary': '#ffeba7',
        'secondary': '#0e2009',
        'accent': '#56bf36',
      }
    }
    
  },
  plugins: [],
}

