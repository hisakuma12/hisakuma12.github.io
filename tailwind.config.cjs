/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#020617',
        panel: '#08111f',
        line: 'rgba(148, 163, 184, 0.18)',
        neon: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          pink: '#ec4899',
          green: '#34d399',
        },
      },
      boxShadow: {
        glow: '0 0 48px rgba(34, 211, 238, 0.18), 0 28px 80px rgba(2, 6, 23, 0.55)',
        violet: '0 0 44px rgba(139, 92, 246, 0.24)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 0%, rgba(34, 211, 238, 0.16), transparent 32%), radial-gradient(circle at 85% 12%, rgba(139, 92, 246, 0.22), transparent 34%), radial-gradient(circle at 50% 88%, rgba(59, 130, 246, 0.12), transparent 38%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.42', transform: 'scale(1)' },
          '50%': { opacity: '0.74', transform: 'scale(1.04)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
