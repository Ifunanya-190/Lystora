/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm terracotta palette — earthy, human, zero AI vibes
        terra: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        forest: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        sand: {
          50:  '#FFFBF5',
          100: '#FEF3E2',
          200: '#FDE8C8',
          300: '#FBD5A0',
          400: '#F6BB6E',
          500: '#F0A050',
          600: '#D4842F',
          700: '#A66424',
          800: '#7D4B20',
          900: '#5C381C',
        },
        ink: {
          50:  '#F8F6F3',
          100: '#EBE7E0',
          200: '#D8D2C6',
          300: '#B8AFA0',
          400: '#968A78',
          500: '#7A6E5D',
          600: '#635848',
          700: '#4D4438',
          800: '#3A332B',
          900: '#2A2520',
          950: '#1A1714',
        },
        cream: '#FFFBF5',
        parchment: '#FEF7EC',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        accent: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
