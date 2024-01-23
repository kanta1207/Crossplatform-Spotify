/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      width: {
        4.5: '1.125rem', // 18px
      },
      colors: {
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        destructive: 'var(--destructive)',
        muted: 'var(--muted)',
        popover: 'var(--popover)',
        card: 'var(--card)',
        borderRadius: {
          md: '0.375rem', // 6px
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeOut: {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
          slideInFromBottom: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideOutToBottom: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100%)' },
          },
          slideInFromRight: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideOutToRight: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100%)' },
          },
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
          pulse: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.25)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.3s ease-in-out',
          fadeOut: 'fadeOut 0.3s ease-in-out',
          slideInFromBottom: 'slideInFromBottom 0.3s ease-in-out',
          slideOutToBottom: 'slideOutToBottom 0.3s ease-in-out',
          slideInFromRight: 'slideInFromRight 0.3s ease-in-out',
          slideOutToRight: 'slideOutToRight 0.3s ease-in-out',
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
    },
    plugins: [],
  },
};
