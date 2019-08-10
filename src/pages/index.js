import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
            <article key={node.id} className="max-w-3xl mx-8 sm:mx-auto mt-16">
              <PostHeader
                slug={`/${node.fields.slug}`}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                readTime={node.timeToRead}
              />
              <section className="sm:ml-24 mt-4">
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
