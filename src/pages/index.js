import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={query}
      render={data => (
        <>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <span>{node.frontmatter.date}</span>
              <span>{node.timeToRead}</span>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </>
      )}
    />
  </Layout>
)

export default IndexPage
