import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F7',
        foreground: '#0D0D0D',
        muted: '#6B6B6B',
        border: '#E2E2E2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display sizes — used for large section labels like "das produkt."
        display: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        thin: '100',
        light: '300',
      },
    },
  },
  plugins: [],
}

export default config
