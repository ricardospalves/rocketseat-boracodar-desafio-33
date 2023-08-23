import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['var(--robotoFont)', 'sans-serif'],
      heading: ['var(--spaceGroteskFont)', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
