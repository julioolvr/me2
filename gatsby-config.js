const rehypeHighlight = require('rehype-highlight');

module.exports = {
  siteMetadata: {
    title: 'Julio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 704,
              backgroundColor: 'transparent',
              disableBgImageOnAlpha: true,
            },
          },
        ],
        rehypePlugins: [rehypeHighlight],
        defaultLayouts: {
          posts: require.resolve('./src/templates/blog-post'),
          default: require.resolve('./src/templates/page'),
        },
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Merriweather:300,300i,900,900i', 'Fira Sans:400'],
      },
    },
    'gatsby-plugin-dark-mode',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
