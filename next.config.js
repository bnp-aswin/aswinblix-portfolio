const path = require('path')
 
const repoName = "aswinblix-portfolio"; // TODO: Replace with your GitHub repo name

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: 'export',
}