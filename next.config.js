const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(IS_PRODUCTION && {
    output: 'export',
    assetPrefix:
      'https://ricardospalves.github.io/rocketseat-boracodar-desafio-33',
  }),
}

module.exports = nextConfig
