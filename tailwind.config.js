/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        field: 'var(--field)',
        mint: 'var(--mint)',
        violet: 'var(--violet)',
        ember: 'var(--ember)',
        'ember-deep': 'var(--ember-deep)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        oval: '50%',
      },
      boxShadow: {
        plate: '0 18px 40px -18px rgba(12, 138, 102, 0.35)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
