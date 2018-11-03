import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

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
          fields {
            slug
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
            <article key={node.id} className="max-w-md mx-auto mt-16">
              <PostHeader
                slug={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                readTime={node.timeToRead}
              />
              <section className="ml-20 mt-4">
                <p>{node.excerpt}</p>
              </section>
            </article>
          ))}
        </>
      )}
    />
  </Layout>
)

export default IndexPage
