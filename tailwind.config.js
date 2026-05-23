/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/config/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light SaaS palette (primary)
        background: '#FFFFFF',
        surface: '#F8FAFC',
        surface2: '#F1F5F9',
        primary: '#2DD4A8',
        primaryHover: '#14B891',
        primarySoft: '#E6FBF5',
        textMain: '#0F172A',
        textMuted: '#64748B',
        textSubtle: '#94A3B8',
        line: '#E2E8F0',

        // Legacy dark tokens (kept for dark mode)
        void: '#0D1410',
        forest: '#182418',
        moss: '#1F2E22',
        linen: '#EDE5D8',
        sage: '#7A8C7A',
        ember: '#2DD4A8',
        brick: '#14B891',
        mint: '#2DD4A8',
        jungle: '#14B891',
        amber: '#F59E0B',
      },
      fontFamily: {
        display: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0,0,0,0.08)',
        softer: '0 4px 20px -8px rgba(0,0,0,0.06)',
        glow: '0 20px 60px -20px rgba(45, 212, 168, 0.4)',
        glowSoft: '0 10px 40px -10px rgba(45, 212, 168, 0.25)',
        card: '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 8px 30px -10px rgba(15, 23, 42, 0.08)',
        cardHover: '0 20px 40px -10px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-2': 'float 8s ease-in-out infinite 1s',
        'float-3': 'float 7s ease-in-out infinite 2s',
        'draw': 'drawLine 3s ease-in-out forwards',
        'bounce-slow': 'bounceY 4s ease-in-out infinite',
        'bounce-slower': 'bounceY 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawLine: {
          to: { 'stroke-dashoffset': '0' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'grid-light': "linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
