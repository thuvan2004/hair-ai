/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0f19',       // Deep night slate
          card: '#161c2a',     // Slate gray card
          border: '#232d42',   // Muted indigo border
          text: '#f3f4f6'      // Light text
        },
        brand: {
          violet: '#7c3aed',   // Main accent violet
          cyan: '#06b6d4',     // Secondary cyan
          emerald: '#10b981',  // Success indicator
          rose: '#f43f5e'      // Error indicator
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-scan': 'scan 2s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: 0.8 },
          '50%': { transform: 'translateY(100%)', opacity: 0.2 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
