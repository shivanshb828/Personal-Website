import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-eb-garamond)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', 'Menlo', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            color: '#dedede',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontWeight: '400',
              color: '#efefef',
            },
            a: {
              color: '#dedede',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            },
            code: {
              fontFamily: 'var(--font-dm-mono), Menlo, monospace',
              fontSize: '0.875rem',
              backgroundColor: '#1a1a1a',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.125rem',
              color: '#dedede',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            hr: {
              borderColor: '#222222',
            },
            blockquote: {
              borderLeftColor: '#333333',
              color: '#888888',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
