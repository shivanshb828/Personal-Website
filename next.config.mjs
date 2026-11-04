/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Research now lives in the experience graph.
    return [{ source: '/research', destination: '/experience#research', permanent: false }]
  },
}

export default config
