/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './content/**/*.md',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2589D0',
          cyan: '#38BCEA',
          orange: '#F06522',
          dark: '#FFFFFF',
          navy: '#F0F4F8',
          card: '#FFFFFF',
          steel: '#64748B',
          light: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1A7DC4 0%, #29ABE2 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0D1117 0%, #111827 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
