module.exports = {
  siteMetadata: {
    title: "Ali's Waste of Bandwidth",
    description: '40thiev.es Posts',
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const url = `${site.siteMetadata.siteUrl}/${
                  edge.node.fields.slug
                }`
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { date: { ne: null } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                      }
                      fields {
                        slug
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: '40thiev.es Posts',
          },
        ],
      },
    },
  ],
}
