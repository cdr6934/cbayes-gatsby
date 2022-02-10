module.exports = {
    siteMetadata: {
      title: `CBayes Media Labs`,
      siteUrl: `https://www.yourdomain.tld`,
      description: "CBayes Media Labs", 
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts', 
          path: `${__dirname}/src/posts`, 
        },
      },
      {
        resolve: 'gatsby-plugin-page-creator', 
        options: {
          path: `${__dirname}/src/posts/` 
        }, 
      }, 
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            posts: require.resolve('./src/components/post-layout.js'),
          },
        },
      },
    ],
}; 