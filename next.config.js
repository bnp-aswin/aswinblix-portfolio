const path = require('path')

// Detect if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true'

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to'],
    unoptimized: true,
  },
  // Only add these settings for GitHub Pages deployment
  ...(isGithubPages && {
    basePath: '/aswinblix-portfolio',
    assetPrefix: '/aswinblix-portfolio/',
    output: 'export',
  }),
}