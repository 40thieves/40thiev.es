module.exports = {
  siteMetadata: {
    title: "Ali's Waste of Bandwidth",
    siteUrl: 'https://40thiev.es',
    lang: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Ali's Waste of Bandwidth",
        short_name: '40thiev.es',
        description: "Ali Smith's blog",
        icon: 'src/images/icon.png',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#38B2AC',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
