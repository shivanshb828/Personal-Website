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
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'ink-muted': 'var(--ink-muted)',
        rule: 'var(--rule)',
        'rule-soft': 'var(--rule-soft)',
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: {
        layout: '44rem',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--ink)',
            '--tw-prose-headings': 'var(--ink)',
            '--tw-prose-links': 'var(--ink)',
            '--tw-prose-bold': 'var(--ink)',
            '--tw-prose-quotes': 'var(--ink-muted)',
            '--tw-prose-bullets': 'var(--ink)',
            '--tw-prose-hr': 'var(--rule)',
            '--tw-prose-code': 'var(--ink)',
            fontSize: '14px',
            lineHeight: '1.75',
            maxWidth: 'none',
            'h1, h2, h3, h4': { fontWeight: '500' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
